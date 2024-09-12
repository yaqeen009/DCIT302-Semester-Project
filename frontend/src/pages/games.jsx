import play from "../assets/play2.svg";
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
        <h1 className="text-primary-300 text-headline">All Games</h1>
        <div className="games flex flex-col">
          <div className="flex flex-row sm:flex-wrap justify-between">
            <Card
              coverImg={beach}
              bgColor={"bg-[#46D7FA]"}
              img={play}
              secondaryColor={"text-[#F4538A] border-[#F4538A]"}
              tertiaryColor={"hover:bg-[#F1D9DB]"}
            />
            <Card
              coverImg={sunset}
              bgColor={"bg-[#3E9F00]"}
              img={play2}
              secondaryColor={"text-primary-200 border-primary-200"}
              tertiaryColor={"hover:bg-secondary-300"}
            />
          </div>

          <h1 className="text-body text-primary-400 my-4">Top Games</h1>
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
        <img className="absolute -bottom-12 sm:-bottom-2 left-0 w-full z-10 rotate-180" src={grass} />
      </div>
    </div>
  );
};

export default Games;
