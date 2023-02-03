import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, FoodDetails, LoadingPage, ErrorPage } from "./pages";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food/:name",
        element: <FoodDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
