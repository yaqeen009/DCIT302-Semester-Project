import avatar from "../assets/avatar.png";
import React from "react";
import ButtonComp from "../components/button";
import { useNavigate } from "react-router-dom";
import edit from "../assets/edit.svg"

const Settings = () => {
  const navigate = useNavigate();
  const onLogOut = () => {
    navigate("/");
  };
  return (
    <div className="settings font-comic z-0 flex sm:flex-col flex-row bg-secondary-200 md:h-[80vh] sm:h-auto">
      <h1 className="hidden sm:block sm:text-mobile-headline font-bold text-primary-300 p-4">
        Settings
      </h1>
      {/* For mobile view, headings on top */}
      <div className="relative w-[30vw] md:w-[40vw] sm:w-[90vw] sm:flex sm:self-center sm:justify-around sm:rounded-lg sm:drop-shadow-none sm:shadow-none md:h-[80vh] h-[82vh] sm:h-fit bg-secondary-300 drop-shadow-2xl shadow-md flex-shrink-0">
        <div className="flex flex-col items-center p-4 h-[80vh] sm:h-fit">
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

          <div className="sm:hidden md:mt-[100%]">
            <ButtonComp
              btnName={"Sign Out"}
              btnColor={"danger-100"}
              btntxtColor={"danger-400"}
              btnFunction={onLogOut}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-secondary-200 p-4 md:p-8 h-full">
        {/* For desktop view, headings inside the content area */}
        <div className="space-y-2">
          <h1 className="text-headline md:text-tablet-headline sm:hidden font-bold text-primary-300">
            Settings
          </h1>
          <span className="flex flex-row justify-between items-center">
            <h2 className="text-title md:text-tablet-title sm:text-mobile-title text-primary-400">
              Account Settings
            </h2>
            <img src={edit} className="sm:w-5 md:w-6" />
          </span>
        </div>
        <div className="bg-secondary-300 p-4 rounded-lg shadow-md mt-8 md:mt-8">
          <div className="flex lg:flex-row flex-col space-y-4 my-8 lg:justify-between">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Enter new username here..."
                className="lg:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label w-[100%] lg:w-[30vw] lg:h-16 md:h-8 h-4 py-5 md:py-6 lg:py-8 pl-4 rounded-lg "
              />
              <input
                type="password"
                placeholder="Enter new password here..."
                className="lg:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label w-[100%] lg:w-[30vw] lg:h-16 md:h-8 h-4 py-5 md:py-6 lg:py-8 pl-4 rounded-lg "
              />
              <input
                type="email"
                placeholder="Enter new email here..."
                className="lg:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label w-[100%] lg:w-[30vw] lg:h-16 md:h-8 h-4 py-5 md:py-6 lg:py-8 pl-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <input
                type="password"
                placeholder="Confirm new password..."
                className="lg:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label w-[100%] lg:w-[30vw] lg:h-16 md:h-8 h-4 py-5 md:py-6 lg:py-8 pl-4 lg:-mt-3 rounded-lg"
              />
              <input
                type="number"
                placeholder="Enter new age here..."
                className="lg:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label w-[100%] lg:w-[30vw] lg:h-16 md:h-8 h-4 py-5 md:py-6 lg:py-8 pl-4 rounded-lg"
              />
              <div className="flex flex-row justify-between lg:items-start lg:space-y-0">
                <select className="p-4  border rounded-lg">
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                  <ButtonComp
                    btnName={"Confirm"}
                    btnColor={"primary-400"}
                    btntxtColor={"tertiary-400"}
                    btnHoverColor={"secondary-400"}
                  />
              </div>
            </div>
          </div>
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
