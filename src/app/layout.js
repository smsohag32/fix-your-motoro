import Providers from "@/providers/Providers";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";


const roboto = Roboto({
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
      <body className={`select-none ${roboto.className}`}>
      <ThemeProvider>
            <Providers>{children}</Providers>
      </ThemeProvider>
        
      </body>
    </html>
  );
}
