import play from "../assets/play2.svg";
import play2 from "../assets/play3.svg";
import Game from "../components/game";
import Card from "../components/card";
import beach from "../assets/beach.png";
import sunset from "../assets/sunset.png";
import grass from "../assets/Grass.svg";

const Games = () => {
  return (
    <div className="relative">
      {/* Top Grass Image */}
      <div className="absolute -top-20 left-0 w-full z-10">
        <img src={grass} alt="Grass" className="w-full" />
      </div>

      <div className="games font-comic my-10 mx-10 z-0">
        {/* Title Section */}
        <h1 className="text-primary-300 text-headline sm:text-mobile-headline font-bold">
          All Games
        </h1>

        {/* Games Section */}
        <div className="games flex flex-col space-y-8">
          {/* Top Games Section */}
          <div className="flex flex-row justify-between sm:flex-col sm:space-y-4">
            {/* First Game Card */}
            <Card
              coverImg={beach}
              bgColor={"bg-[#46D7FA]"}
              img={play}
              secondaryColor={"text-[#F4538A] border-[#F4538A]"}
              tertiaryColor={"hover:bg-[#F1D9DB]"}
            />

            {/* Second Game Card */}
            <Card
              coverImg={sunset}
              bgColor={"bg-[#3E9F00]"}
              img={play2}
              secondaryColor={"text-primary-200 border-primary-200"}
              tertiaryColor={"hover:bg-secondary-300"}
            />
          </div>

          {/* Top Games List */}
          <h1 className="text-body text-primary-400 my-4">Top Games</h1>
          <div className="flex flex-row justify-between sm:flex-wrap sm:space-y-4">
            <div className="flex-col space-y-4">
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
            <div className="flex-col space-y-4">
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

          {/* Recently Played Section */}
          <h1 className="text-body text-primary-400 my-4">Recently Played</h1>
          <div className="flex flex-row justify-between sm:flex-wrap sm:space-y-4">
            <div className="flex-col space-y-4">
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
            <div className="flex-col space-y-4">
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
          <div className="flex flex-row justify-between mb-10 sm:flex-wrap sm:space-y-4">
            <div className="flex-col space-y-4">
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
            <div className="flex-col space-y-4">
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
        <img className="absolute -bottom-20 left-0 w-full z-10 rotate-180" src={grass} />
      </div>
    </div>
  );
};

export default Games;
