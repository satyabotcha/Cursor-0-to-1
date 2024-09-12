import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takeoff: Cursor Course",
  description: "This is the repo for the Cursor course on Takeoff."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
