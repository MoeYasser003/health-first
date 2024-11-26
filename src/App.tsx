import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/styles.css";
import Root from "./Pages/Root";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
]);
function App() {
  return (
    <main className="font-ubuntu">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
