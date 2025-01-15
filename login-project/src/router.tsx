import { createBrowserRouter, Outlet } from "react-router";
import NavBar from "./components/NavBar";
import About from "./components/About";
import LoggedIn from "./components/LoggedIn";
import HomePage, { FunctionContext, UserContext } from "./components/HomePage";
import userReducer from "./UserModel";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <><Outlet />
<NavBar />
    </>,
    children: [
      { path: 'about', element: <About />, errorElement: <>Error!</> },
      {
        path: 'loggedin', element: <LoggedIn />, errorElement: <>Error1</>,
        children: [
          { path: ':name', element: <LoggedIn /> }
        ]
      },
      { path: '/', element: <HomePage /> },
    ]
  }
])