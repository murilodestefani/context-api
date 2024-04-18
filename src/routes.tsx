import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
]);

export { router };
