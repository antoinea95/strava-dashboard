import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionWrapper from "./providers/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });
import { NavBar } from "./components/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
    </SessionWrapper>
  );
}
