//vendors
import styled from "styled-components";

//constants
import { BREAKPOINTS } from "../../constants";

export const ContentStyled = styled.div`
  img {
    width: 100%;
  }
`;
ContentStyled.displayName = "ContentStyled";

export const RecipeStyledContainer = styled.div`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
RecipeStyledContainer.displayName = "RecipeStyledContainer";

export const TitleStyled = styled.div`
  height: 70px;
  font-style: normal;
  font-size: 26px;
  color: #000000;
  font-weight: 600;
  text-overflow: ellipsis;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    height: 40px;
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
TitleStyled.displayName = "TitleStyled";
