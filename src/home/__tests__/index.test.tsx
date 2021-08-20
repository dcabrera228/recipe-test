//vendors
import React from "react";
import { render } from "enzyme";
import * as react from "react";

//components
import Home from "..";

let wrapper;

describe("Home page test suit", () => {
  const useContext = jest.spyOn(react, "useContext");
  const context = {
    loadRandomRecipes: jest.fn(),
  };
  beforeEach(() => {
    useContext.mockReturnValue(context);
    wrapper = render(<Home />);
  });

  it("should render the component correctly", () => {
    expect(wrapper).toBeDefined();
  });
});
