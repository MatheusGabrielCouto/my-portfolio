import { type ReactNode } from "react";

const gradientStyle = {
  backgroundImage:
    "linear-gradient(to right, var(--hero-name-from), var(--hero-name-via), var(--hero-name-to))",
};

export function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
