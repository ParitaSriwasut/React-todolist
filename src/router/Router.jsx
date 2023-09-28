import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import Authenticated from "../components/Authenticated";

//like switch case
//Header has a children /w login&register
//outlet is everything in children
const router = createBrowserRouter([
  {
    //Layout
    path: "/",
    element: (
      <>
        <div className="bg-gray-300 h-screen">
          <Header />
          <div className="p-8 max-w-xl mx-auto">
            <Outlet />
          </div>

          {/* path = '/' outlet = <h1>Home Page</h1>
        path = '/login' outlet = <h1>Login Page</h1> 
        path = '/register' outlet = <h1>Register Page</h1>  
        OUTLET will change value depends on PATH */}
        </div>
      </>
    ),
    children: [
      {
        path: "",
        element: (
          <Authenticated>
            <HomePage />{" "}
          </Authenticated>
        ),
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
