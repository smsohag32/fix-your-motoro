
import Providers from "@/providers/Providers";
import  "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
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
    <html lang="en" suppressHydrationWarning >
      <head>
        <link rel="icon" href={metadata.icon} />
      </head>
      <body 
      className={`select-none ${roboto.className} `}
    
      >
    
        
          <Providers >{children } </Providers>
      
      </body>
    </html>
  );
}
