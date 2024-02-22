import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ["400", "300", "700", "500"],
  subsets: ["latin"],
});

const description = 'Pet Nations, build the Decentralized Society of Pets powered by Socialfi, IP, and ID ecosystem.'
const defaultTitle = 'Pet Nations'



export const metadata: Metadata = {
  title: "Pet Nations - No man land",
  description: description,
  openGraph: {
    title: defaultTitle,
    description: description,
    type: 'website',
  },
  twitter: {
    title: defaultTitle,
    description: description,
    siteId: defaultTitle,
    creator: defaultTitle,
    creatorId: defaultTitle,
  },
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
