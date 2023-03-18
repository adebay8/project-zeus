import { Inter } from "next/font/google";
import { Meta } from "@/components";
import { HomeHero } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Meta />
      <header>
        <nav></nav>
      </header>
      <main>
        <HomeHero />
      </main>
      <footer></footer>
    </div>
  );
}
