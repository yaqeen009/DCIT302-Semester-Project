import logo from "../assets/Logo.png";
import home from "../assets/home.svg";
import games from "../assets/games.svg";
import rewards from "../assets/rewards.svg";
import settings from "../assets/settings.svg";
import NavComponent from "./navComp";
import grass from "../assets/Grass.svg";

const Header = () => {
  return (
    <div className="header font-comic text-label top-0 mb-[64px] sticky z-30">
      <div className="bg-primary-100 w-full h-fit flex flex-row px-4 pb-5 items-center justify-between relative z-20">
        <div className="">
          <img src={logo} />
        </div>
        <div className="flex flex-row">
          <NavComponent icon={home} navName={"Home"} path={"/home"}/>
          <NavComponent icon={games} navName={"Games"} path={"/games"}/>
          <NavComponent icon={rewards} navName={"Rewards"} path={"/rewards"}/>
        </div>
        <div className="flex flex-row">
          <img src={settings} className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute mt-8 top-10 left-0 w-full z-10">
        <img src={grass} className="w-full "/>
      </div>
    </div>
  );
};

export default Header;
