import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry </h2>
      <br />
      <h4>No page is found</h4>
      <Link to="/"> Back to the Homepage</Link>
    </div>
  );
};

export default NotFound;
