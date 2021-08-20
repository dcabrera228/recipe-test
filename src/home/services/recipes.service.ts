//api
import apiResquest from "../../api";

export const getRecipesData = () => {
  const url = "/randomselection.php";
  const apiResponse = apiResquest({ url, method: "get" });

  return apiResponse;
};

export const getRecipeData = (id: string) => {
  const url = `/lookup.php?i=${id}`;
  const apiResponse = apiResquest({ url, method: "get" });

  return apiResponse;
};
