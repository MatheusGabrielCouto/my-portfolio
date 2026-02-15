type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-(--border) px-4 py-8 text-center text-xs text-(--muted) sm:py-10 sm:text-sm">
      {text}
    </footer>
  );
}
