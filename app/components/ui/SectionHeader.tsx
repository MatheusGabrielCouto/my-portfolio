type SectionHeaderProps = {
  label: string;
  title: string;
};

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <>
      <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-(--muted)">
        {label}
      </p>
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
    </>
  );
}
