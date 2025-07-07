import { Outlet } from "react-router-dom";

/**
 * AuthLayout Component
 *
 * This layout acts as a wrapper for all authentication-related routes.
 * It uses the <Outlet /> component to render the matched child route component
 * under the `/auth` path (e.g., login, register, etc.).
 *
 * This is useful for adding shared UI (e.g., headers, sidebars, or background)
 * across all auth pages in one place.
 */
const AuthLayout = () => {
  // Render the child route component matched by the current URL
  return <Outlet />;
};

export default AuthLayout;
