import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavComponent = ({ icon, navName, path }) => {
  //use state to manage on click
  const [isClicked, setIsClicked] = useState(false);
  //use location to get current location
  const location = useLocation();
  //use effect to update click event
  useEffect(() => {
    setIsClicked(location.pathname === path);
  }, [location.pathname, path]);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <Link to={path}>
      <div
        className={`p-4 font-comic xl:text-body md:text-tablet-body text-mobile-headline m-2 h-fit rounded-lg text-primary-400 inline-flex align-middle cursor-pointer ${
          isClicked
            ? " bg-success-400 hover:bg-success-100 sm:bg-transparent sm:hover:bg-transparent"
            : "bg-primary-200 hover:bg-primary-300 sm:bg-transparent sm:hover:bg-transparent"
        }`}
        onClick={handleClick}
      >
        <img src={icon} className="mr-2 " />
        <p>{navName}</p>
      </div>
    </Link>
  );
};

export default NavComponent;
