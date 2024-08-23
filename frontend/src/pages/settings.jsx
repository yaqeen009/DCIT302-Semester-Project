import avatar from "../assets/avatar.png";
import React from 'react';

const Settings = () => {
  return (
    <div className="settings font-comic z-0 flex flex-row bg-green-100">
      <div className="relative w-[400px] h-screen bg-primary-200 rounded-lg drop-shadow-2xl shadow-md">
        <div className="flex flex-col items-center p-4">
          <div className="avatar flex flex-col items-left  my-8">
            <img src={avatar} alt="Avatar" className="mt-10 w-24 h-24 rounded-full " />
            <h1 className="mt-2 font-bold text-headline">Julie Jackson</h1>
           
             <p className="text-primary-700">5 years</p>
             <p className="text-primary-700">julie99@gmail.com</p>
             <p className="text-primary-700">Level 4</p>
            
            
          </div>
          <button className="bg-red-500 text-white px-4 py-2 mt-44 rounded-lg">Sign Out</button>
        </div>
      </div>
      <div className="flex-1 bg-white p-8">
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md mt-32">
          <h2 className="text-lg font-bold text-yellow-800 mb-4">Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Enter new Username here..." className="p-2 border rounded-lg" />
            <input type="password" placeholder="Enter new password here..." className="p-2 border rounded-lg" />
            <input type="email" placeholder="Enter new email here..." className="p-2 border rounded-lg" />
            <input type="password" placeholder="Confirm new password..." className="p-2 border rounded-lg" />
            <input type="number" placeholder="Enter new age here..." className="p-2 border rounded-lg" />
            <select className="p-2 border rounded-lg ">
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-lg">Confirm</button>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-yellow-800 mb-4">Notification settings</h3>
          <button className="bg-purple-500 text-white px-12 py-4 rounded-lg">Off Notifications</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
