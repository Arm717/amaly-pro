import type { Metadata } from "next";

import "./globals.css";
import "./reset.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Header sectionVisible/>
          <main className="flex-1">
              {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
