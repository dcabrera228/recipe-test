import styled from "styled-components";

export const HeaderStyledContainer = styled.div`
  header {
    margin: 0 auto;
    height: 450px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
  }
`;
HeaderStyledContainer.displayName = "HeaderStyledContainer";

export const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 44px;
  height: 44px;
  margin-left: 10px;

  img {
    position: absolute;
    left: 0;
    width: 44px;
    height: 44px;
    margin-left: 10px;
  }
`;
LogoWrapper.displayName = "LogoWrapper";
