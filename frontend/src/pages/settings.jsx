import avatar from "../assets/avatar.png";
import React from 'react';

const Settings = () => {
  return (
    <div className="settings font-comic z-0 flex flex-row">
      <div className="relative w-[400px] h-screen bg-primary-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="avatar flex flex-col items-center my-4">
            <img src={avatar} alt="Avatar" className=" mt-10 w-24 h-24 rounded-full" /> 
            <h1 className="mt-2 font-bold text-headline">JULIE</h1>
          </div>
          {/* Add more content here */}
        </div>
      </div>
      <div className="flex-1 bg-white p-4">
        {/* Add content for the right side here */}
      </div>
    </div>
  );
};

export default Settings;
