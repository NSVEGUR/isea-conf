import { cn } from "@/lib/utils";

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Shell({ className, children, ...props }: ShellProps) {
  return (
    <main
      className={cn(
        "container lg:mx-auto lg:min-h-[50vh] px-3 lg:px-6 pt-3 pb-10",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
