import girl from "../assets/girl.png";
import NavComponent from "../components/navComp";
import Footer from "../components/footer";
import play from "../assets/play2.svg";
import Game from "../components/game";
import Card from "../components/card";
import beach from "../assets/beach.png";
import grass from "../assets/Grass.svg";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute -top-20 left-0 w-full z-10 sm:hidden">
        <img src={grass} alt="Grass" className="w-full"/>
      </div>
      <div className="home font-comic mt-10 mx-10 sm:mt-0 sm:mx-4 z-0">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <h1 className="text-primary-300 text-headline sm:text-mobile-headline font-bold">
              Welcome back, <span className="text-primary-400">Julie</span>
            </h1>
            <img src={girl} className="scale-75" />
          </div>
          <div className="-mr-2 sm:hidden font-bold">
            <NavComponent navName={"For Parents"}/>
          </div>
        </div>
        <div className="games flex flex-col">
          <div className="flex flex-row sm:flex-wrap justify-between">
            <div className="flex-col">
              <Game
                bgColor={"bg-primary-300"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-300"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-300"}
                gameName={"Addition"}
                category={"Math"}
              />
            </div>
            <Card
              coverImg={beach}
              bgColor={"bg-[#46D7FA]"}
              img={play}
              secondaryColor={"text-[#F4538A] border-[#F4538A]"}
              tertiaryColor={"hover:bg-[#F1D9DB]"}
            />
          </div>
          <h1 className="text-body text-primary-400 my-4">Recently Played</h1>
          <div className="flex flex-row sm:flex-wrap justify-between">
            <div className="flex-col">
              <Game
                bgColor={"bg-primary-100"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-100"}
                gameName={"Addition"}
                category={"Math"}
              />
            </div>
            <div className="flex-col">
              <Game
                bgColor={"bg-primary-100"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-100"}
                gameName={"Addition"}
                category={"Math"}
              />
            </div>
          </div>
          <h1 className="text-body text-primary-400 my-4">New games</h1>
          <div className="flex flex-row sm:flex-wrap justify-between mb-2">
            <div className="flex-col">
              <Game
                bgColor={"bg-primary-400"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-400"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-400"}
                gameName={"Addition"}
                category={"Math"}
              />
            </div>
            <div className="flex-col">
              <Game
                bgColor={"bg-primary-400"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-400"}
                gameName={"Addition"}
                category={"Math"}
              />
              <Game
                bgColor={"bg-primary-400"}
                gameName={"Addition"}
                category={"Math"}
              />
            </div>
          </div>
        </div>
      </div>
      <img className="absolute -bottom-12 sm:-bottom-2 left-0 w-full z-10 rotate-180" src={grass} />
    </div>
  );
};

export default Home;
