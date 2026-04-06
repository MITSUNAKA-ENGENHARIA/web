import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from "./components/custom/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Mitsunaka Engenharia",
  description: "Fazemos sua reforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body
        className={`antialiased`}
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        <Theme accentColor="indigo" appearance="light">
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
