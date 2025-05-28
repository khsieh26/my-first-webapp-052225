// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// Update the path to match your file structure
import Navigation from './components/Navigation';
import Footer from './components/Footer'; 

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'My First Web App',
  description: 'A simple web app built with Next.js',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <div className="flex flex-col min-h-screen">
          <main className="max-w-6xl mx-auto p-4 flex-1">
            {children}
          </main>
          <footer className="w-full border-t bg-background py-6 md:py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}