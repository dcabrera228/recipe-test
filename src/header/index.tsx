//vendors
import React from "react";

//assets
import background from "../assets/home-background.jpeg";
import logo from "../assets/logo.png";

//styles
import { HeaderStyledContainer, LogoWrapper } from "./index.styled";

export const Header = () => {
  return (
    <HeaderStyledContainer>
      <header style={{ backgroundImage: `url(${background})` }}>
        <LogoWrapper>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoWrapper>
      </header>
    </HeaderStyledContainer>
  );
};
