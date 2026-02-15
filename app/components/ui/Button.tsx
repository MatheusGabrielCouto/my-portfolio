import { type ReactNode, type AnchorHTMLAttributes } from "react";

const base =
  "inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors sm:px-6 sm:py-3.5";

const variants = {
  primary:
    "bg-(--button-primary-bg) text-(--button-primary-text) hover:bg-(--button-primary-hover)",
  secondary:
    "border border-(--border-strong) bg-(--card-bg) text-foreground hover:bg-(--hover-bg)",
} as const;

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
  children: ReactNode;
};

export function Button({
  variant = "secondary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
