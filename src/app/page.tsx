import HomePictures from "./_components/HomePictures";
import MostBuyedProducts from "./_components/MostBuyedProducts";
import { CategoriesSlider } from "./_components/CategoriesSlider";

export default async function Home() {
  return (
    <>
      <HomePictures />
      <CategoriesSlider />
      <MostBuyedProducts />
    </>
  );
}
