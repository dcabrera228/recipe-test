//vendors
import React, { useContext } from "react";

//context
import { RecipeContext } from "../../context";

//components
import Recipe from "../recipe";

//styles
import {
  DailyRecipeStyledContainer,
  RecipeStyledWrapper,
  TitleStyledWrapper,
} from "./index.styled";

const DailyRecipeSection = () => {
  //@ts-ignore
  const { recipesData } = useContext(RecipeContext);
  const renderRecipe = () => {
    return recipesData?.map((item: any, index: number) => {
      return <Recipe key={index} item={item} />;
    });
  };

  return (
    <DailyRecipeStyledContainer>
      <TitleStyledWrapper>Recipes of the day</TitleStyledWrapper>
      <RecipeStyledWrapper>{renderRecipe()}</RecipeStyledWrapper>
    </DailyRecipeStyledContainer>
  );
};

export default DailyRecipeSection;
