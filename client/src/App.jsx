import React from "react";
import { Navbar, Footer } from "./components/index";
import { Home } from "./pages/index";
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