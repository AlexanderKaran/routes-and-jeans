import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import JeansPage from "./Pages/JeansPage";
import ContactPage from "./Pages/ContactPage";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>For all your jeans needs!</h1>

      {/* When creating Route components, they have to be wrapped by Routes. */}
      <Routes>
        {/* Here we are creating our home page route. We set the path to "/" as it is the starting page in our app, and we pass in the component we want to load to the element prop. */}
        <Route path="/" element={<HomePage />} />

        {/* Setting the path to "contact" will load the contact page component at the URL /contact. No need to add the slash as it is implied by default when working from the base URL */}
        <Route path="contact" element={<ContactPage />} />

        {/* Setting the path ":jeans" means it is a dynamic path param. It is a parameter that is changed based on something happening in the app. Any URL that does not match "/" or "/contact" and has something after the base URL will cause the element in this route to load. Don't worry if you are not 100% sure what this means; you will see it in action later. */}
        <Route path=":jeans" element={<JeansPage />} />
      </Routes>
    </div>
  );
}

export default App;
