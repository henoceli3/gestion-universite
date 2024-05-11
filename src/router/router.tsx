import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/misc/NotFoundPage";
import AdminLayout from "../Layout/AdminLayout";
import LoginPage from "../pages/auth/LoginPage";
import SingUpPage from "../pages/auth/SignUp";

export const appRouter = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <NotFoundPage />,
    children: [],
  },
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "signup",
    element: <SingUpPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "",
    element: <AdminLayout />,
    errorElement: <NotFoundPage />,
    children: [],
  },
]);
