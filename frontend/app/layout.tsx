import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'sum1d3v - Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  keywords: ['portfolio', 'developer', 'web development', 'software engineer'],
  authors: [{ name: 'sum1d3v' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 