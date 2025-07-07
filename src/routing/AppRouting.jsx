import { createBrowserRouter } from "react-router-dom";
import { ForgetPassword, Login, Register, ResetPassword } from "../pages/auth";
import AuthLayout from "../pages/auth/AuthLayout";

// Define application routes using React Router
export const routing = createBrowserRouter([
  {
    // Base route for all authentication-related pages
    path: "/auth",

    // Shared layout component for auth pages (e.g., with common header/footer)
    element: <AuthLayout />,

    // Nested routes under /auth
    children: [
      {
        // Route for login page - accessible via /login
        path: "login",
        element: <Login />, // Render Login component
      },
      {
        // Route for user registration - accessible via /register
        path: "register",
        element: <Register />, // Render Register component
      },
      {
        // Route for forget password - accessible via /forget-password
        path: "forget-password",
        element: <ForgetPassword />, // Render ForgetPassword component
      },
      {
        // Route for resetting password - accessible via /reset-password
        path: "reset-password",
        element: <ResetPassword />, // Render ResetPassword component
      },
    ],
  },
]);
