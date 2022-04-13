// test/pages/index.test.js
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import HomePage from "../pages/index";

test("Render content", () => {
  const component = render(<HomePage />);
  component.getByText("Busca usuarios de Github");
});
