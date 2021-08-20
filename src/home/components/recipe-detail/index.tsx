//vendors
import React, { useContext, useEffect } from "react";
import { withRouter, RouteComponentProps, useParams } from "react-router";

//context
import { RecipeContext } from "../../context";

//components
import Favorites from "../favorites";

//styles
import {
  ContentWrapper,
  DirectionsTitleStyled,
  DirectionsWrapperStyled,
  ImageWrapper,
  IngredientsWrapperStyled,
  RecipeDetailWrapper,
  TitleStyled,
  TitleWrapper,
} from "./index.styled";

interface Props extends RouteComponentProps<any> {}

const RecipeDetail = (props: Props) => {
  //@ts-ignore
  const { loadRecipe, selectedRecipe } = useContext(RecipeContext);
  //@ts-ignore
  const { id } = useParams();

  const ingredient = "strIngredient";
  const measure = "strMeasure";

  const keys = selectedRecipe ? Object.keys(selectedRecipe) : [];

  const ingredientsKeys = keys.filter((k) => k.match(ingredient));
  const measuresKeys = keys.filter((k) => k.match(measure));

  const ingredients = ingredientsKeys
    .map((key, index) => ({
      ing: selectedRecipe[key],
      qty: selectedRecipe[measuresKeys[index]],
    }))
    .filter((item) => item.ing && item.qty);

  useEffect(() => {
    loadRecipe && loadRecipe(id);
  }, []);

  return (
    <RecipeDetailWrapper>
      <ImageWrapper>
        <img alt="recipe-img" src={selectedRecipe?.strMealThumb} />
      </ImageWrapper>
      <TitleWrapper>
        <TitleStyled>{selectedRecipe?.strMeal}</TitleStyled>
        <Favorites />
      </TitleWrapper>
      <ContentWrapper>
        <IngredientsWrapperStyled>
          {ingredients.map((item) => (
            //@ts-ignore
            <div key={item.ing}>
              {item.qty}
              {item.ing}
            </div>
          ))}
        </IngredientsWrapperStyled>
        <DirectionsWrapperStyled>
          <DirectionsTitleStyled>Directions</DirectionsTitleStyled>
          {selectedRecipe?.strInstructions}
        </DirectionsWrapperStyled>
      </ContentWrapper>
    </RecipeDetailWrapper>
  );
};

export default withRouter(RecipeDetail);
