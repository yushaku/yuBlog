"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/index";
import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { HTMLAttributes, useEffect, useState } from "react";

interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
  showMultiplePackageOptions?: boolean;
  codeLanguage?: string;
  lightTheme?: string;
  darkTheme?: string;
  commandMap: Record<string, string>;
  className?: string;
}

export function ScriptCopyBtn({
  showMultiplePackageOptions = true,
  codeLanguage = "shell",
  lightTheme = "catppuccin-mocha",
  darkTheme = "catppuccin-macchiato",
  commandMap,
  className,
}: ScriptCopyBtnProps) {
  const packageManagers = Object.keys(commandMap);
  const [packageManager, setPackageManager] = useState(packageManagers[0]);
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState("");
  const { theme } = useTheme();
  const command = commandMap[packageManager];

  useEffect(() => {
    async function loadHighlightedCode() {
      try {
        const { codeToHtml } = await import("shiki");
        const highlighted = await codeToHtml(command, {
          lang: codeLanguage,
          themes: {
            light: lightTheme,
            dark: darkTheme,
          },
          defaultColor: theme === "dark" ? "dark" : "light",
        });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${command}</pre>`);
      }
    }

    loadHighlightedCode();
  }, [command, theme, codeLanguage, lightTheme, darkTheme]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(className)}>
      <div className='w-full space-y-2'>
        <div className='mb-2 flex items-center justify-between'>
          {showMultiplePackageOptions && (
            <div className='relative'>
              <div className='inline-flex overflow-hidden rounded-md translate-y-2.5 border text-xs'>
                {packageManagers.map((pm, index) => (
                  <div key={pm} className='flex items-center'>
                    {index > 0 && (
                      <div className='h-4 w-px bg-border' aria-hidden='true' />
                    )}
                    <Button
                      variant='ghost'
                      size='sm'
                      className={`relative rounded-none bg-background px-2 py-1 hover:bg-background ${
                        packageManager === pm
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setPackageManager(pm)}
                    >
                      {pm}
                      {packageManager === pm && (
                        <motion.div
                          className='absolute inset-x-0 bottom-[1px] mx-auto h-0.5 w-[90%] bg-primary'
                          layoutId='activeTab'
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='relative flex items-center'>
          <div className='grow font-mono'>
            {highlightedCode ? (
              <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            ) : (
              <pre className='rounded-md rounded-tl-none border border-border bg-foreground p-2 px-4 font-mono'>
                {command}
              </pre>
            )}
          </div>

          <Button
            variant='outline'
            size='icon'
            className='relative ml-2 rounded-md'
            onClick={copyToClipboard}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
          >
            <span className='sr-only'>{copied ? "Copied" : "Copy"}</span>
            <Copy
              className={`h-4 w-4 transition-all duration-300 ${
                copied ? "scale-0" : "scale-100"
              }`}
            />
            <Check
              className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
                copied ? "scale-100" : "scale-0"
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
