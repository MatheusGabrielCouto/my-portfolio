type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-(--border) py-10 text-center text-sm text-(--muted)">
      {text}
    </footer>
  );
}
