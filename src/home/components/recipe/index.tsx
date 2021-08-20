//vendors
import React from "react";
import { useHistory, withRouter, RouteComponentProps } from "react-router-dom";

//constants
import PATHS from "../../../routes/constants/paths.constants";

//styles
import {
  ContentStyled,
  RecipeStyledContainer,
  TitleStyled,
} from "./index.styled";

interface Props extends RouteComponentProps<any> {
  item: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
}

const Recipe = ({ item }: Props) => {
  const history = useHistory();
  const onRecipeClick = () => {
    history?.push(`${PATHS.RECIPE_DETAIL}/${item.idMeal}`, item.idMeal);
  };

  return (
    <RecipeStyledContainer onClick={onRecipeClick}>
      <TitleStyled>{item.strMeal}</TitleStyled>
      <ContentStyled>
        <img alt="recipe-img" src={item.strMealThumb} />
      </ContentStyled>
    </RecipeStyledContainer>
  );
};

export default withRouter(Recipe);
