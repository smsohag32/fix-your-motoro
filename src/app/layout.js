
import Providers from "@/providers/Providers";
import  "./globals.css";
// import "@/styles/light-theme.css"; // Import your light theme styles
// import "@/styles/dark-theme.css";  // Import your dark theme styles
import { Roboto } from "next/font/google";
import { ThemeProviders } from "./ThemeProvider";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fix Your Motoro",
  description: "FYM",
  icon: "/redketchugp/favicon.ico", 
};

export default function RootLayout({ children, theme }) {

  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <link rel="icon" href={metadata.icon} /> {/* Use the icon path from metadata */}
      </head>
      <body 
      className={`select-none ${roboto.className} ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}
      style={{
        backgroundColor: theme === 'dark' ? 'var(--background)' : 'inherit',
        color: theme === 'dark' ? 'var(--foreground)' : 'inherit',
      }}
      >
    
        <ThemeProviders theme={theme}>
          <Providers >{children } </Providers>
        </ThemeProviders>
      </body>
    </html>
  );
}
