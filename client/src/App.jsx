import React from "react";
import { Navbar, Footer } from "./components/index";
import {
  Home,
  Login,
  Register,
  Client,
  Mechanic,
  MechanicOrders,
  ClientOrders,
  ClientOrder,
  MechanicOrder,
  Conversation,
  Messages,
} from "./pages/index";
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
          path: "/mechanic/order/:id",
          element: <MechanicOrder />,
        },
        {
          path: "/client",
          element: <Client />,
        },
        {
          path: "/client/orders",
          element: <ClientOrders />,
        },
        {
          path: "/client/order/:id",
          element: <ClientOrder />,
        },
        {
          path: "/conversations",
          element: <Conversation />,
        },
        {
          path: "/messages/:id",
          element: <Messages />,
        }
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
