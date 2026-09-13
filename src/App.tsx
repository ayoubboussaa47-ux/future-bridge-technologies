import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Technology } from "./pages/Technology";
import { Solutions } from "./pages/Solutions";
import { AlbatrossAI } from "./pages/AlbatrossAI";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import "./styles/globals.css";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/technology", element: <Technology /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/albatross-ai", element: <AlbatrossAI /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Home /> },
    ],
  },
], { basename });

function App() {
  return <RouterProvider router={router} />;
}

export default App;