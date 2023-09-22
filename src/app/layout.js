import Providers from "@/providers/Providers";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fix Your Motoro",
  description: "FYM",
  icon: "/redketchugp/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icon} />{" "}
        {/* Use the icon path from metadata */}
      </head>
      <body className={`select-none ${montserrat.className}`}>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
