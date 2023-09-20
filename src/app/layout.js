import Providers from "@/providers/Providers";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "FYM",
  description: "FYM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`select-none ${montserrat.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
