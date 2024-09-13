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
      {/* Grass Image for background */}
      <div className="absolute -top-20 left-0 w-full z-10 sm:hidden">
        <img src={grass} alt="Grass" className="w-full" />
      </div>

      {/* Main Home Section */}
      <div className="home font-comic mt-10 mx-10 sm:mt-0 sm:mx-4 z-0">
        <div className="flex flex-row items-center justify-between">
          {/* Welcome text with the girl image */}
          <div>
          <div className="flex flex-row items-center">
            <h1 className="text-primary-300 text-headline sm:text-mobile-headline font-bold">
              Welcome back, <span className="text-primary-400">Julie</span>
            </h1>
            <img src={girl} className="scale-75" />
          </div>
          
          <h1 className="text-body text-primary-400 mb-2">Top Games</h1>
          </div>
          

          {/* "For Parents" button hidden for tablet */}
          <div className="-mr-2 md:hidden sm:hidden font-bold">
            <NavComponent navName={"For Parents"} />
          </div>
        </div>

        {/* Games section */}
        <div className="games flex flex-col">
          {/* Top Games and Continue Game Card */}
          <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 justify-between">
            
            {/* Game Cards (Left Column) */}
           
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
            {/* Continue Game Card (Right Column) */}
            <Card
                coverImg={beach}
                bgColor={"bg-success-100"}
                img={play}
                secondaryColor={"text-primary-400 border-primary-400"}
                tertiaryColor={"hover:bg-danger-400"}
                className="w-full md:w-[45%] lg:w-[30%] "
              />
            
          </div>

          {/* Recently Played Section */}
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
          {/* New Games Section */}
          <h1 className="text-body text-primary-400 my-4">New games</h1>
          <div className="flex flex-row sm:flex-wrap justify-between mb-10">
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
      <img className="absolute -bottom-12 sm:-bottom-2 left-0 w-full z-10 rotate-180 mt-10" src={grass} />
    </div>
  );
};

export default Home;
