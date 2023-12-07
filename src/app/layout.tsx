import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Widget from "../components/widget";

const poppins = Poppins({ subsets: ["latin-ext"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Widget Test",
  description: "Widget exercise with animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Widget>{children}</Widget>
      </body>
    </html>
  );
}
