import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import home from "../assets/home.svg";
import games from "../assets/games.svg";
import rewards from "../assets/rewards.svg";
import settings from "../assets/settings.svg";
import settings2 from "../assets/settings2.svg";
import notiOff from "../assets/noti-off.svg";
import avatar from "../assets/avatar.png";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import NavComponent from "./navComp";
import avatarlg from "../assets/avatarlg.png"
import avatarmd from "../assets/avatarmd.png"
import avatarsm from "../assets/avatarsm.png"
import edit from "../assets/edit.svg"
import ButtonComp from "./button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling drawer
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen); // Toggle drawer
  };
  const showProfile = () => {
    setIsProfile(!isProfile);
  };

  const handleSettingsClick = () => {
    navigate("/settings"); // Navigate to settings page
  };

  return (
    <div className="header font-comic text-label top-0 sticky z-30">
      <div className="bg-primary-100 sm:bg-secondary-200 w-full h-fit flex px-4 py-4 items-center justify-between relative z-20">
        {/* Logo and Menu Button */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-full sm:h-16" />
        </div>
        <nav className="flex flex-row items-center sm:hidden">
          <NavComponent
            icon={home}
            navName={"Home"}
            path={"/home"}
            text={"primary-400"}
            color={"primary-200"}
            hovered={"bg-primary-300"}
            hoveredClicked={"bg-success-200"}
            clicked={"success-100"}
          />
          <NavComponent
            icon={games}
            navName={"Games"}
            path={"/games"}
            text={"primary-400"}
            color={"primary-200"}
            hovered={"bg-primary-300"}
            hoveredClicked={"bg-success-200"}
            clicked={"success-100"}
          />
          <NavComponent
            icon={rewards}
            navName={"Rewards"}
            path={"/rewards"}
            text={"primary-400"}
            color={"primary-200"}
            hovered={"bg-primary-300"}
            hoveredClicked={"bg-success-200"}
            clicked={"success-100"}
          />
        </nav>

        {/* User Icons */}
        <div className="flex flex-row items-center space-x-4">
          <button className="h-8 w-8 flex items-center justify-center">
            <img src={notiOff} alt="notification" className="h-full w-full" />
          </button>
          <button
            className="h-8 w-8 flex items-center justify-center"
            onClick={showProfile}
          >
            <img src={avatar} alt="Avatar" className="h-full w-full" />
          </button>
          <button
            onClick={handleSettingsClick}
            className="h-8 w-8 flex items-center justify-center sm:hidden"
          >
            <img src={settings} alt="Settings" className="h-full w-full " />
          </button>
          <button onClick={toggleDrawer} className="ml-4 hidden sm:block">
            <img src={menuIcon} alt="Menu" className="h-8 w-8" />
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
          <nav className="sm:flex flex-col items-center space-y-6 mt-8 hidden">
            <NavComponent
              icon={home}
              navName={"Home"}
              path={"/home"}
              text={"primary-400"}
            />
            <NavComponent
              icon={games}
              navName={"Games"}
              path={"/games"}
              text={"primary-400"}
            />
            <NavComponent
              icon={rewards}
              navName={"Rewards"}
              path={"/rewards"}
              text={"primary-400"}
            />
            <NavComponent
              icon={settings2}
              navName={"Settings"}
              path={"/settings"}
              text={"primary-400"}
            />
          </nav>
          <div className="mt-48 mb-4 text-center text-tertiary-400">
            <p>safeplaylearn.org ©2024</p>
          </div>
        </div>
        {/*Profile drawer*/}
        <div
          className={`fixed top-0 right-0 h-fit bg-secondary-300 transition-transform transform ${
            isProfile ? "translate-x-0" : "translate-x-full"
          } w-3/4 max-w-xs shadow-2dp`}
        >
          <button onClick={showProfile} className="m-4">
            <img src={closeIcon} alt="Close" className="h-8 w-8" />
          </button>
          <div className="w-fit h-fit flex items-end justify-center mx-[30%] mb-4">
            <img src={avatarlg} className="hidden lg:block z-10"/>
            <img src={avatarmd} className="hidden md:block z-10"/>
            <img src={avatarsm} className="hidden sm:block z-10"/>
            <img src={edit} className="z-20 -ml-10"/>
          </div>
          <div className="text-title sm:text-mobile-title md:text-tablet-title text-tertiary-200 space-y-4 ml-4">
            <h2>Julie Jackson</h2>
            <h2>5 years</h2>
            <h2>Level 4</h2>
            <h2>julie99@gmail.com</h2>
          </div>
          <div className="flex flex-row justify-between">
            <ButtonComp btnName={"Edit Profile"} btnColor={"primary-100"} btntxtColor={"tertiary-400"}/>
            <ButtonComp btnName={"Sign Out"} btnColor={"danger-100"} btntxtColor={"danger-400"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
