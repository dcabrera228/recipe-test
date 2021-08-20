//vendors
import styled from "styled-components";

//constants
import { BREAKPOINTS } from "../home/constants";

export const HeaderStyledContainer = styled.div`
  header {
    margin: 0 auto;
    height: 450px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;

    @media (max-width: ${BREAKPOINTS.mobile}px) {
      height: 30vh;
    }
  }
`;
HeaderStyledContainer.displayName = "HeaderStyledContainer";

export const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 44px;
  height: 44px;
  margin-left: 10px;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    margin: 0 auto;
    position: relative;
    width: 7em;
    height: 7em;
  }

  img {
    position: absolute;
    left: 0;
    width: 44px;
    height: 44px;
    margin-left: 10px;

    @media (max-width: ${BREAKPOINTS.mobile}px) {
      width: 100%;
      height: 100%;
    }
  }
`;
LogoWrapper.displayName = "LogoWrapper";
