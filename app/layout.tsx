import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abid Hasan | Personal Portfolio",
  description:
    "Official personal portfolio of Abid Hasan — projects, skills, education, achievements and social links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
