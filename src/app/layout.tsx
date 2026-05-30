import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import AppLayout from "../components/AppLayout";
import "./globals.css";
import { APP_DESC, APP_TITLE } from "../constants/metadata";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESC,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
