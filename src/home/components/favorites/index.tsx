//vendors
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

//context
import { RecipeContext } from "../../context";

//constants
import { FAVORITE_KEY } from "../../constants";

//styles
import { FavoritesStyledContainer } from "./index.styled";

const Favorites = () => {
  //@ts-ignore
  const { selectedRecipe } = useContext(RecipeContext);

  const onClick = () => {
    //@ts-ignore
    const existingKeys = localStorage.getItem(FAVORITE_KEY)?.split(",") || [];
    const updatedKeys = existingKeys?.includes(selectedRecipe?.idMeal)
      ? existingKeys.filter((item) => item !== selectedRecipe?.idMeal)
      : [...existingKeys, selectedRecipe?.idMeal];

    localStorage.setItem(FAVORITE_KEY, updatedKeys.toString());
  };

  return (
    <FavoritesStyledContainer onClick={onClick}>
      <FontAwesomeIcon icon={faHeartbeat} />
    </FavoritesStyledContainer>
  );
};

export default Favorites;
