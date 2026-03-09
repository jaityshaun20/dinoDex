import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthProvider } from "../contexts/AuthContext";

test("redirects if user not logged in", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <ProtectedRoute>
          <div>Secret Page</div>
        </ProtectedRoute>
      </AuthProvider>
    </BrowserRouter>
  );
});