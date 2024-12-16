import "@/assets/styles/globals.css";
import { inter, unbounded } from "@/config/fonts";

import { metaData, viewPort } from "@/config/metadata";
export const metadata = metaData;
export const viewport = viewPort;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${unbounded.variable} font-text scroll-smooth bg-dark-2 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
