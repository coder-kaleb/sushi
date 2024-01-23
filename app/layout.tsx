import type { Metadata } from "next";
import { Inter, Lora, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "400", "500", "600", "700", "800", "300"],
// });

export const metadata: Metadata = {
  title: "Sushi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden bg-[#FFF1EB] min-h-screen">{children}</body>
    </html>
  );
}
