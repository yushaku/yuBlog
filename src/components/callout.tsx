import { AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/utils";

export function Callout({
  title,
  children,
  icon,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { icon?: string; title?: string }) {
  return (
    <div
      className={cn(
        "relative flex bg-sidebar rounded-lg p-6 border-l-4 border-primary text-foreground",
        "hover:bg-card transition-all duration-300",
        className
      )}
      {...props}
    >
      <span className='absolute -left-4 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-sidebar text-foreground'>
        <span className='text-xl'>{icon || "i"}</span>
      </span>
      <div className='ml-6'>
        {title && (
          <AlertTitle className='font-semibold text-xl mb-2 text-primary/70'>
            {title}
          </AlertTitle>
        )}
        <AlertDescription className='text-base text-foreground leading-relaxed'>
          {children}
        </AlertDescription>
      </div>
    </div>
  );
}
