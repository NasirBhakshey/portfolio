import ToggleNav from "@/components/ToggleNav";
import type { Metadata } from "next";
import { ThemeProvider } from "../provider/ThemeProvider";
import "./globals.css";
import AnimationProvider from "@/provider/AnimationProvider";

export const metadata: Metadata = {
  title: "Basit Saleem",
  description: "Generated by create next app",
  icons: "/BS.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToggleNav />
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}