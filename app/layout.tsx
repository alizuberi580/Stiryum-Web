import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#" className="dark">
      <body className={`${roboto.className} bg-background`} suppressHydrationWarning>
        <Navbar />
        {children}
        {/*<CostCalculator />*/}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}


/*The Toaster component from the sonner library provides toast notifications for your Next.js application.Displays temporary 
notification messages (toasts) that appear on screen to inform users about actions, errors, successes, etc.*/