import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import toast, { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lista de Pedidos',
  description: 'Lista de Pedidos com Paginação',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <>
          <Toaster />
          {children}
        </>
      </body>
    </html>
  );
}
