import play from"../assets/play2.svg";
import play2 from "../assets/play3.svg"
import Game from "../components/game";
import Card from "../components/card";
import beach from "../assets/beach.png"
import sunset from "../assets/sunset.png"
import grass from "../assets/Grass.svg"

const Games = () => {
  return (
    <div className="relative">
      <div className="absolute -top-20 left-0 w-full z-10">
        <img src={grass} alt="Grass" className="w-full" />
      </div>

      <div className="games font-comic my-10 mx-10 sm:my-0 sm:mx-5 z-0">
        {/* Title Section */}
        <h1 className="text-primary-300 text-headline sm:text-mobile-headline font-bold">
          All Games
        </h1>

        {/* Games Section */}
        <div className="games flex flex-col space-y-8 sm:space-y-4 sm:mb-10">
          {/* Top Games Section */}
          <div className="flex flex-row sm:flex-wrap justify-between sm:flex-col sm:space-y-4">
            {/* First Game Card */}
            <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 justify-between w-full">
              <Card
                coverImg={beach}
                bgColor={"bg-success-100"}
                img={play}
                secondaryColor={"text-primary-400 border-primary-400"}
                tertiaryColor={"hover:bg-danger-400"}
                className="w-full md:w-[48%] lg:w-[30%]"
              />
              <Card
                coverImg={sunset}
                bgColor={"bg-primary-100"}
                img={play2}
                secondaryColor={"text-primary-300 border-primary-200"}
                tertiaryColor={"hover:bg-secondary-300"}
                className="w-full md:w-[48%] lg:w-[30%]"
              />
            </div>
          </div>

          <h1 className="text-body text-primary-400 my-4">Top Games</h1>
          <div className="flex flex-row flex-wrap justify-between">
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
            </div>
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
            </div>
          </div>

          <h1 className="text-body text-primary-400 my-4">Recently Played</h1>
          <div className="flex flex-row flex-wrap justify-between">
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
          <div className="flex flex-row flex-wrap mx-2 justify-between mb-10">
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

        {/* Bottom Grass Image */}
        <img
          className="absolute -bottom-12 sm:-bottom-12 left-0 w-full z-10 rotate-180 mt-10"
          src={grass}
        />
      </div>
    </div>
  );
};

export default Games;