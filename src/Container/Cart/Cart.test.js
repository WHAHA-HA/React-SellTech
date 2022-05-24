import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "./Cart";

test("render an 'empty cart message' when no products are present", async () => {
  const props = {
    onToggleCheckoutClicked: jest.fn(),
    isAutenticated: true,
    productsInCart: [],
  };

  const { findByText } = render(
    <BrowserRouter>
      <Cart {...props} />
    </BrowserRouter>
  );
  const emptyCartMessage = await findByText("Your Cart is Empty!");

  expect(emptyCartMessage).toBeTruthy();
});

test("Cart Summary Table is rendered successfully when items prenset", async () => {
  const props = {
    onToggleCheckoutClicked: jest.fn(),
    isAutenticated: false,
    productsInCart: [{id: 1}, {id: 2}, {id: 3}],
    match: {
      url: "",
    },
  };

  const { findByRole } = render(
    <BrowserRouter>
      <Cart {...props} />
    </BrowserRouter>
  );
  const table = await findByRole("table");
  expect(table).toBeTruthy();
});