import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean | undefined;
  variant?: "primary" | "secondary" | "ghost" | undefined;
  children: ReactNode;
};

export function Button({ asChild, variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn("button", `button-${variant}`, className);
  if (asChild) return <Slot className={classes} {...(props as Record<string, unknown>)} />;
  return <button className={classes} {...props} />;
}
