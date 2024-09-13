import park from "../assets/park.png";
import play from "../assets/play.svg";

const Game = ({ gameName, bgColor, category }) => {
  return (
    <div
      className={`game relative w-[40vw] max-w-[90vw] h-[128px] sm:w-[400px] sm:h-[15vh] md:h-[9vh] md:w-[42vw] ${bgColor} overflow-clip rounded-lg py-8 mb-4 shadow-md`}
    >
      <div className="px-8">
        <div className="flex flex-row items-center">
          <span className="sm:scale-95 sm:w-auto sm:h-auto md:scale-95 md:h-6 md:w-6 w-8 h-8 rounded-full border border-tertiary-400 inline-flex justify-center items-center hover:bg-secondary-400 mr-4">
            <img className="sm:scale-[0.6] sm:w-auto sm:h-auto md:w-3 md:h-3 w-4 h-4 ml-1" src={play} />
          </span>
          <h1 className="text-title sm:text-mobile-title md:text-tablet-title text-tertiary-400">{gameName}</h1>
        </div>
        <p className="absolute bottom-4 text-body sm:text-mobile-body md:text-tablet-body text-tertiary-400">{category}</p>
      </div>
      <img className="absolute -mt-6 md:-mt-10 md:scale-95 sm:-mt-8 right-0 sm:scale-110" src={park} />
    </div>
  );
};

export default Game;
