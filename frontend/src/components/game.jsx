import park from "../assets/park.png";
import play from "../assets/play.svg";

const Game = ({ gameName, bgColor, category }) => {
  return (
    <div
      className={`game relative w-[562px] max-w-[90vw] h-[128px] sm:w-[400px] md:w-[450px] lg:w-[500px] ${bgColor} overflow-clip rounded-lg py-8 mb-7 shadow-md`}
    >
      <div className="px-8">
        <div className="flex flex-row items-center">
          <span className="sm:scale-95 sm:w-auto sm:h-auto w-8 h-8 rounded-full border border-tertiary-400 inline-flex justify-center items-center hover:bg-secondary-400 mr-4">
            <img className="sm:scale-[0.6] sm:w-auto sm:h-auto w-4 h-4 ml-1" src={play} />
          </span>
          <h1 className="text-title sm:text-mobile-title text-tertiary-400">{gameName}</h1>
        </div>
        <p className="absolute bottom-4 text-body sm:text-mobile-body text-tertiary-400">{category}</p>
      </div>
      <img className="absolute -mt-6 right-0 sm:scale-90" src={park} />
    </div>
  );
};

export default Game;
