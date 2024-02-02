import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "300", "700", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pet Nations - No man land",
  description: "The limitless web3 ecosystem for pets #desoc #ip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
