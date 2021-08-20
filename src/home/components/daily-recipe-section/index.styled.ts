//vendors
import styled from "styled-components";

//constants
import { BREAKPOINTS } from "../../constants";

export const DailyRecipeStyledContainer = styled.div`
  display: block;
`;
DailyRecipeStyledContainer.displayName = "DailyRecipeStyledContainer";

export const TitleStyledWrapper = styled.div`
  display: flex;
  font-style: italic;
  font-size: 25px;
  color: #808088;
  font-weight: normal;
  padding: 35px 0;
  margin: 20px;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 22px;
  }
`;
TitleStyledWrapper.displayName = "TitleStyledWrapper";

export const RecipeStyledWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
  }
`;
RecipeStyledWrapper.displayName = "RecipeStyledWrapper";
