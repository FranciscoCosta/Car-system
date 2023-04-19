import React from "react";
import { Navbar, Footer } from "./components/index";
import {Home,Login, Register, Client, Mechanic, MechanicOrders} from "./pages/index"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {

  const Layout = () => {
    return (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/mechanic",
          element: <Mechanic />,
        },
        {
          path: "/mechanic/orders",
          element: <MechanicOrders />,
        },
        {
          path: "/client",
          element: <Client />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;