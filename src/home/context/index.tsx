//vendors
import React from "react";

//hook
import { useRecipesData } from "../hook";

export const RecipeContext = React.createContext({});

type Props = {
  children: React.ReactNode;
};

const RecipeProvider = ({ children }: Props) => {
  const value = useRecipesData();
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export default RecipeProvider;
