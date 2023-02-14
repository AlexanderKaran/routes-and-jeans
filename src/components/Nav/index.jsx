import { Link, Outlet } from "react-router-dom";

function Nav() {
  /* Here we are creating a simple navigation element on the home page.  */
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Jeans</Link>
          </li>
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
      {/* The Outlet component is where the content of the page will be rendered. */}
      <Outlet />
    </div>
  );
}

export default Nav;
