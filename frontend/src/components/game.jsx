import park from "../assets/park.png";
import play from "../assets/play.svg";

const Game = ({ gameName, bgColor, category }) => {
  return (
    <div className={`game relative w-[562px] h-[128px] ${bgColor} overflow-clip rounded-lg py-8 mb-7 shadow-md`}>
      <div className="px-8">
        <div className="flex flex-row items-center">
          <span className="w-8 h-8 rounded-full border border-tertiary-400 inline-flex justify-center items-center hover:bg-secondary-400 mr-4">
            <img className="w-4 h-4 ml-1" src={play} />
          </span>
          <h1 className="text-title text-tertiary-400">{gameName}</h1>
        </div>
        <p className="absolute bottom-4 text-body text-tertiary-400">{category}</p>
      </div>
      <img className="absolute -mt-6 right-0" src={park} />
    </div>
  );
};

export default Game;
