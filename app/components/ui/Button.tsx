import { type ReactNode, type AnchorHTMLAttributes } from "react";

const base =
  "rounded-full px-6 py-3.5 text-sm font-medium transition-colors";

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
