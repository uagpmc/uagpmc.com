import { Inter } from "next/font/google";

import Navigation from "@/components/Navigation";

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
      <body className="bg-black">
        <header className="marquee">
          <p>
            <b>BREAKING NEWS:</b> UAG forces have been spotted in the
            Tschernobyl Zone. Reasons for their deployment are unknown at this
            time, but we will keep you updated as the situation develops.
          </p>
        </header>
        <Navigation />
        <main className="mb-16">{children}</main>
        <footer className="bg-black fixed bottom-0 left-0 w-full py-2 px-1 z-[100]">
          <p className="text-center text-gray-400 text-sm">
            uagpmc.com is a community managed by{" "}
            <a href="https://unnamed.group">Unnamed Group</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
