"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export function Comments() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      ref={(element) => {
        if (!element) return;

        const scriptElement = document.createElement("script");
        scriptElement.setAttribute("src", "https://giscus.app/client.js");
        scriptElement.setAttribute("data-repo", "yushaku/yuBlog");
        scriptElement.setAttribute("data-repo-id", "R_kgDOHwdyDg");
        scriptElement.setAttribute("data-category", "General");
        scriptElement.setAttribute("data-category-id", "DIC_kwDOHwdyDs4CpdjO");
        scriptElement.setAttribute("data-mapping", "pathname");
        scriptElement.setAttribute("data-strict", "0");
        scriptElement.setAttribute("data-reactions-enabled", "1");
        scriptElement.setAttribute("data-emit-metadata", "0");
        scriptElement.setAttribute("data-input-position", "bottom");
        scriptElement.setAttribute(
          "data-theme",
          theme === "dark" ? "catppuccin_frappe" : "light"
        );
        scriptElement.setAttribute("data-lang", "en");
        scriptElement.setAttribute("crossorigin", "anonymous");
        scriptElement.setAttribute("async", "");

        element.appendChild(scriptElement);

        return () => {
          element.removeChild(scriptElement);
        };
      }}
    />
  );
}
