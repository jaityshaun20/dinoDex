import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import { AuthProvider } from "../contexts/AuthContext";

test("renders login form", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );

  // check heading instead of generic text
  expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
});