import { NavigationBar } from "../components/Navigation-Bar";
import { AboutUs } from "../components/AboutUs";
import { RecipeCard } from "../components/RecipeCard";

export function HomePage({recipes}) {
  return (
    <>
      <NavigationBar />
      <AboutUs />
      <RecipeCard recipes={recipes} />
    </>
  );
}