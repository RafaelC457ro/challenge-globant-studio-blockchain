import {
  render as renderRTL,
  RenderOptions,
  screen,
} from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const render = (
  ui: JSX.Element,
  options?:
    | RenderOptions<
        typeof import("@testing-library/dom/types/queries"),
        HTMLElement,
        HTMLElement
      >
    | undefined
) => {
  renderRTL(ui, { wrapper: AllTheProviders, ...options });
};

test("renders react home page", () => {
  render(<App />);
  const title = screen.getByText(/Welcome to our upload page/i);

  expect(title).toBeInTheDocument();
});
