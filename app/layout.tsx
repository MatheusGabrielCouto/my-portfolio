import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import { Providers } from "./components/Providers";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Gabriel | Software Engineer",
  description: "Software Engineer with 5+ years in React, React Native, Next.js and NestJS. Web, mobile and full stack. Foz do Iguaçu, PR.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} font-sans antialiased theme-bg theme-text`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
