import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/misc/NotFoundPage";
import AdminLayout from "../Layout/AdminLayout";
import LoginPage from "../pages/auth/LoginPage";
import SingUpPage from "../pages/auth/SignUp";
import Administration from "../pages/app/Administration";
import AjouterAdmin from "../pages/app/administration/ajouterAdmin";
import ModifierAdministration from "../pages/app/administration/modifierAdministration";

export const appRouter = createBrowserRouter([
  {
    path: "auth/login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "auth/signup",
    element: <SingUpPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "",
    element: <AdminLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "administration", element: <Administration /> },
      {
        path: "administration/ajouter-administration",
        element: <AjouterAdmin />,
      },

      {
        path: "administration/modifier-administration",
        element: <ModifierAdministration />,
      },
    ],
  },
]);
