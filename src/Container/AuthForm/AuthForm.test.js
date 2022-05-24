import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthForm } from './AuthForm'
import { Logout } from './Logout/Logout'
import { createMemoryHistory } from 'history'
import { BrowserRouter } from "react-router-dom";

test("Enters Username And Password and Logs in", async () => {
  const username = "abdullahzubair075@gmail.com";
  const password = "abdullah0";
  const mockLogin = jest.fn();

  render(
    <BrowserRouter>
      <AuthForm onSignIn={() => mockLogin(username, password)} />
    </BrowserRouter>
  );

  const usernameInput = screen.getByPlaceholderText("Email Address");;
  userEvent.type(usernameInput, "abdullahzubair075@gmail.com");
  const passwordInput = screen.getByPlaceholderText("Password");
  userEvent.type(passwordInput, "abdullah0");
  const loginButton = screen.getByRole("button", { name: /^Sign in$/i });
  expect(loginButton).not.toBeDisabled();

  userEvent.click(loginButton);

  await expect(mockLogin).toHaveBeenCalled();
  await expect(mockLogin).toHaveBeenCalledTimes(1);
  await expect(mockLogin).toHaveBeenCalledWith(
    "abdullahzubair075@gmail.com",
    "abdullah0"
  );
});

test("Logout Redirects to Home page", async () => {
  const history = createMemoryHistory({ initialEntries: ["/home"] });
  const mockLogout = jest.fn();

  render(
    <BrowserRouter>
      <Logout onLogout={mockLogout} />
    </BrowserRouter>
  );

  expect(mockLogout).toHaveBeenCalledTimes(1);
  expect(history.location.pathname).toBe("/home");
});