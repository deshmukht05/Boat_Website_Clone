import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Orders } from "./pages/Orders";
import { Personalisation } from "./pages/Personalisation";
import { Store } from "./pages/Store";
import { LiveSaleDetails } from "./components/LiveSaleDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:saleID",
          element: <LiveSaleDetails />
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/personalisation",
          element: <Personalisation />,
        },
        {
          path: "/store",
          element: <Store />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
