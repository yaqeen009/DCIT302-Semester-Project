import avatar from "../assets/avatar.png";
import React from "react";
import NavComponent from "../components/navComp";
import ButtonComp from "../components/button";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate()
  const onLogOut = () => {
    navigate('/')
  }
  return (
    <div className="settings font-comic z-0 flex flex-col md:flex-row bg-secondary-200">
      {/* For mobile view, headings on top */}

      <div className="space-y-8 md:hidden p-4">
        <h1 className="text-headline text-primary-300 sm:text-mobile-headline font-bold">
          Settings
        </h1>
        <h2 className="text-title sm:text-mobile-title text-primary-400">
          Account Settings
        </h2>
      </div>

      <div className="relative w-full md:w-[400px] sm:w-[90vw] sm:flex sm:self-center sm:justify-around sm:rounded-lg sm:drop-shadow-none sm:shadow-none h-auto sm:h-fit md:h-screen bg-secondary-300 drop-shadow-2xl shadow-md flex-shrink-0">
        <div className="flex flex-col items-center p-4 h-full sm:h-fit">
          <div className="avatar flex flex-col sm:flex-row sm:basis-1/2 space-y-4 items-center md:items-left my-8 ">
            <div className="flex flex-col sm:pr-[20vw]">
              <img
                src={avatar}
                alt="Avatar"
                className="mt-10 w-24 h-24  rounded-full"
              />
              <div className="hidden sm:block">
                <ButtonComp
                  btnName={"Sign Out"}
                  btnColor={"danger-100"}
                  btntxtColor={"danger-400"}
                  btnFunction={onLogOut}
                />
              </div>
            </div>

            <div className="sm:pl-[5vw] sm:space-y-2">
              <h1 className="mt-2 font-bold sm:font-normal text-title sm:text-mobile-title text-primary-400 text-center sm:text-end md:text-left">
                Julie Jackson
              </h1>
              <p className="text-title sm:text-mobile-title text-center text-primary-400 md:text-left sm:text-end">
                5 years
              </p>
              <p className="text-title sm:text-mobile-title text-center text-primary-400 md:text-left sm:text-end">
                julie99@gmail.com
              </p>
              <p className="text-title sm:text-mobile-title text-center text-primary-400 md:text-left sm:text-end">
                Level 4
              </p>
            </div>
          </div>

          {/* Sign Out button at the bottom on mobile */}
          <div className="mt-auto w-full md:w-48 flex justify-center sm:hidden">
            {/* <button className="bg-danger-100 text-danger-400 px-4 py-2 rounded-lg w-full">Sign Out</button> */}
            <NavComponent navName={"Sign Out"} />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-secondary-200 p-4 md:p-8">
        {/* For desktop view, headings inside the content area */}
        <div className="hidden md:block space-y-8">
          <h1 className="text-5xl text-danger-200 mb-4">Settings</h1>
          <h2 className="text-2xl text-primary-400 mb-4">Account Settings</h2>
        </div>

        <div className="bg-secondary-300 p-4 rounded-lg shadow-md mt-8 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter new username here..."
              className="p-2 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Enter new password here..."
              className="p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Enter new email here..."
              className="p-2 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Confirm new password..."
              className="p-2 border rounded-lg"
            />
            <input
              type="number"
              placeholder="Enter new age here..."
              className="p-2 border rounded-lg"
            />
            <select className="p-2 border rounded-lg">
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <button className="bg-primary-400 text-white px-4 py-2 mt-4 rounded-lg">
            Confirm
          </button>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-primary-400 mb-4">
            Notification settings
          </h3>
          <button className="bg-secondary-400 text-white px-12 py-4 rounded-lg">
            Off Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
