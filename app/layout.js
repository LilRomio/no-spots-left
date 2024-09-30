import './globals.css';
import { DM_Sans } from 'next/font/google';

import { twMerge } from 'tailwind-merge';
const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'No Spots Left',
  description: 'Cleaning Company Guildford',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, 'antialiased bg-[#EAEEFE]')}>{children}</body>
    </html>
  );
}
