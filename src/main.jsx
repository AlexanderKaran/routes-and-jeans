import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import JeansPage from "./pages/JeansPage";
import ContactPage from "./pages/ContactPage";

// CSS
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    /* Here we are setting the Nav as the default element to load when the app starts. */
    element: <Nav />,
    /** Adding the page components to the children array mean they render inside the Outlet component we added in the nav */
    children: [
      {
        path: "/",
        // Here we are creating our home page route. We set the path to "/" as it is the starting page in our app, and we pass in the component we want to load to the element prop.
        element: <HomePage />,
      },
      {
        // Setting the path ":jeans" means it is a dynamic path param. It is a parameter that is changed based on something happening in the app. Any URL that does not match "/" or "/contact" and has something after the base URL will cause the element in this route to load. Don't worry if you are not 100% sure what this means; you will see it in action later.
        path: ":jeans",
        element: <JeansPage />,
      },
      {
        // Setting the path to "contact" will load the contact page component at the URL /contact.
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
