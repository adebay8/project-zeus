import { HomeHero, HomeProducts } from "@/sections";
import DefaultLayout from "@/layouts/default";

export default function Home() {
  return (
    <DefaultLayout>
      <HomeHero />
      <HomeProducts />
    </DefaultLayout>
  );
}
