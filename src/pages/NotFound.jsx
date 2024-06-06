import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h3 className="text-center ">
        Ooops!!the page or resource you looking for cannot be found!!
      </h3>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
