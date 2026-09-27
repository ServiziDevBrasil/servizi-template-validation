import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'servizi-template-validation',
  description: 'Servizi Web Fullstack'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
