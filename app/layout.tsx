import "@/styles/globals.css";

import Header from '@/components/Header';

export const metadata = {
  title: 'Quote Generator',
  description: 'Motivational quotes daily',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
