import Providers from "@/providers/Providers";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`select-none ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
