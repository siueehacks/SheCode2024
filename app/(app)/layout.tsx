import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.scss";
import { Appbar } from "@/components/Appbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SheCode",
  description: "Code get better when we do it together",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Appbar />
    {children}</body>
    </html>
  );
}
