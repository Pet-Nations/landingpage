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
  metadataBase: new URL('https://petnations.io'),
  openGraph: {
    title: defaultTitle,
    description: description,
    type: 'website',
    images: [
      {
        url: 'https://petnations.io/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
      {
        url: 'https://petnations.io/opengraph-image2.jpg',
        width: 1200,
        height: 630,
        alt: 'Another Image',
      }
    ]
  },
  twitter: {
    title: defaultTitle,
    description: description,
    siteId: defaultTitle,
    creator: defaultTitle,
    creatorId: defaultTitle,
    images: [
      {
        url: 'https://petnations.io/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: defaultTitle,
      }
    ]
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
