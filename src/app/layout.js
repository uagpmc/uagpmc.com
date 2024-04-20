import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Unnamed Arma Group | Make memes, not war!",
  description: `Unnamed Arma Group is a community dedicated to hosting "seriously fun" sessions for the Armed Assault (Arma) series of games. We specifically focus on small team tactics where each member is a vital part of the team and not just a grunt. You'll also find that we have a relaxed atmosphere, with no "yes sir, no sir" bullshit to deal with.`,
  icons: {
    icon: "/yeet21.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-uaggreen">{children}</body>
    </html>
  );
}
