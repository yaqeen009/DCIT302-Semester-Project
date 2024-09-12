// import React from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/Logo.png";
// import home from "../assets/home.svg";
// import games from "../assets/games.svg";
// import rewards from "../assets/rewards.svg";
// import settings from "../assets/settings.svg";
// import notiOff from "../assets/noti-off.svg"
// import NavComponent from "./navComp";

// import avatar from "../assets/avatar.png";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleSettingsClick = () => {
//     navigate("/settings"); // Navigate to the settings page
//   };

//   return (
//     <div className="header font-comic text-label top-0  sticky z-30">
//       <div className="bg-primary-100 w-full h-fit sm:h-[100vh] flex flex-row px-4 pb-5 items-center justify-between relative z-20">
//         <div className="sm:none">
//           <img src={logo} alt="Logo" />
//         </div>
//         <div className="flex flex-row sm:flex-col">
//           <NavComponent icon={home} navName={"Home"} path={"/home"} />
//           <NavComponent icon={games} navName={"Games"} path={"/games"} />
//           <NavComponent icon={rewards} navName={"Rewards"} path={"/rewards"} />
//         </div>
//         <div className="flex flex-row items-center">
//           <button className="mr-4 h-8 w-8 flex items-center justify-center">
//             <img src={notiOff} alt="notification" />
//           </button>
//           <button>
//             <img src={avatar} alt="Avatar" />
//           </button>
//           <button
//             onClick={handleSettingsClick}
//             className="ml-4 h-8 w-8 flex items-center justify-center"
//           >
//             <img src={settings} alt="Settings" className="h-full w-full" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import home from "../assets/home.svg";
import games from "../assets/games.svg";
import rewards from "../assets/rewards.svg";
import settings from "../assets/settings.svg";
import notiOff from "../assets/noti-off.svg";
import avatar from "../assets/avatar.png";
import menuIcon from "../assets/menu.svg"; // Hamburger icon
import closeIcon from "../assets/close.svg"; // Close icon
import NavComponent from "./navComp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling drawer
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen); // Toggle drawer
  };

  const handleSettingsClick = () => {
    navigate("/settings"); // Navigate to settings page
  };

  return (
    <div className="header font-comic text-label top-0 sticky z-30">
      <div className="bg-primary-100 sm:bg-secondary-200 w-full h-fit flex px-4 py-4 items-center justify-between relative z-20">
        {/* Logo and Menu Button */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
          <button onClick={toggleDrawer} className="ml-4">
            <img src={menuIcon} alt="Menu" className="h-8 w-8" />
          </button>
        </div>

        {/* User Icons */}
        <div className="flex flex-row items-center space-x-4">
          <button className="h-8 w-8 flex items-center justify-center">
            <img src={notiOff} alt="notification" className="h-full w-full" />
          </button>
          <button className="h-8 w-8 flex items-center justify-center">
            <img src={avatar} alt="Avatar" className="h-full w-full" />
          </button>
          <button
            onClick={handleSettingsClick}
            className="h-8 w-8 flex items-center justify-center"
          >
            <img src={settings} alt="Settings" className="h-full w-full" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed top-0 right-0 h-full bg-green-500 z-40 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } w-3/4 max-w-xs`}
        >
          {/* Close Button */}
          <button onClick={toggleDrawer} className="m-4">
            <img src={closeIcon} alt="Close" className="h-8 w-8" />
          </button>
          <nav className="flex flex-col items-center space-y-6 mt-8 text-white">
            <NavComponent icon={home} navName={"Home"} path={"/home"} />
            <NavComponent icon={games} navName={"Games"} path={"/games"} />
            <NavComponent icon={rewards} navName={"Rewards"} path={"/rewards"} />
            <NavComponent icon={settings} navName={"Settings"} path={"/settings"} />
          </nav>
          <div className="mt-auto mb-4 text-center text-white">
            <p>safeplaylearn.org ©2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
