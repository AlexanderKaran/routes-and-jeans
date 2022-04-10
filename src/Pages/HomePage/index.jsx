import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <h2>Home Page</h2>
      {/* Here we are creating a simple navigation element on the home page.  */}
      <nav>
        <ul>
          <li>
            {/* You should still use the `<a></a>` HTML tag when linking to something outside the app. However, now, when linking to other pages or content inside the app, we use the React Router `Link` component. */}
            <Link to="/bootcut">Bootcut Jeans</Link>
          </li>
          <li>
            {/* To tell the link where to navigate, we add the URL to the to prop.  */}
            <Link to="/skinny">Skinny Jeans</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default HomePage;
