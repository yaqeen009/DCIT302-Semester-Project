import Header from "../components/header";
import girl from "../assets/girl.png";
import NavComponent from "../components/navComp";

const Home = () => {
  return (
    <div>
      <div className="home font-comic mx-4 ">
      <div className="flex flex-row items-center">
        <h1 className="text-primary-300 text-headline text-">
          Welcome back, <span className="text-primary-400">Julie</span>
        </h1>
        <img src={girl} className="scale-75" />
        <div className="ml-[65%]"><NavComponent navName={"For Parents"}/></div>
      </div>
    </div>
    </div>
  );
};

export default Home;
