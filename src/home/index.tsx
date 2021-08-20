//vendors
import React, { useEffect, useContext } from "react";

//context
import { RecipeContext } from "./context";

//components
import DailyRecipeSection from "./components/daily-recipe-section";

const Home = () => {
  //@ts-ignore
  const { loadRandomRecipes } = useContext(RecipeContext);

  useEffect(() => {
    loadRandomRecipes && loadRandomRecipes();
  }, []);

  return <DailyRecipeSection />;
};

export default Home;
