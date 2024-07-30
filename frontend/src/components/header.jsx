import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png";
import home from "../assets/home.svg";
import games from "../assets/games.svg";
import rewards from "../assets/rewards.svg";
import settings from "../assets/settings.svg";
import NavComponent from "./navComp";
import grass from "../assets/Grass.svg";
import avatar from "../assets/avatar.png";

const Header = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings'); // Navigate to the settings page
  };

  return (
    <div className="header font-comic text-label top-0  sticky z-30">
      <div className="bg-primary-100 w-full h-fit flex flex-row px-4 pb-5 items-center justify-between relative z-20">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex flex-row">
          <NavComponent icon={home} navName={"Home"} path={"/home"} />
          <NavComponent icon={games} navName={"Games"} path={"/games"} />
          <NavComponent icon={rewards} navName={"Rewards"} path={"/rewards"} />
        </div>
        <div className="flex flex-row items-center">
          <img src={avatar} alt="Avatar" />
          <button onClick={handleSettingsClick} className="ml-4 h-8 w-8 flex items-center justify-center">
            <img src={settings} alt="Settings" className="h-full w-full" />
          </button>
        </div>
      </div>
      <div className="absolute mt-8 top-10 left-0 w-full z-10">
        <img src={grass} alt="Grass" className="w-full" />
      </div>
    </div>
  );
};

export default Header;
