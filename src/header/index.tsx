//vendors
import React from "react";

//styles
import { HeaderStyledContainer, LogoWrapper } from "./index.styled";

export const Header = () => {
  return (
    <HeaderStyledContainer>
      <header>
        <LogoWrapper>
          <img src="logo" className="App-logo" alt="logo" />
        </LogoWrapper>
      </header>
    </HeaderStyledContainer>
  );
};
