import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { NavBar } from "@/components/ui/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasun's portfolio",
  description: "This is a my first projrct",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          < NavBar />
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
