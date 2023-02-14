import { useParams } from "react-router-dom";

function JeansPage() {
  /**
   * useParams is a hook (function) that allows us to access the path param. Earlier, when we set the path of the route component that loads the jeans page, we added the path param `: jeans` into the URL.
   * We can access whatever value is put in this URL section using useParams and then access the value using the same key, `jeans`.
   */
  const params = useParams();

  return (
    <div>
      <h1>{params.jeans}</h1>
    </div>
  );
}

export default JeansPage;
