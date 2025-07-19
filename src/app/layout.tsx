import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenShield Pest Management - Professional Pest Control Services',
  description: 'Professional pest control services for residential and commercial properties. Safe, effective, and eco-friendly solutions.',
  keywords: 'pest control, exterminator, termite control, rodent control, insect control',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}