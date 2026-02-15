type SectionHeaderProps = {
  label: string;
  title: string;
};

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <>
      <p className="mb-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-(--muted) sm:mb-2 sm:text-xs">
        {label}
      </p>
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </>
  );
}
