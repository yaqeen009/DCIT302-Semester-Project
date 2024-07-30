
const Card = ({coverImg,bgColor,img, secondaryColor,tertiaryColor}) => {
  return (
    <div className={`${bgColor} w-fit h-fit rounded-md flex flex-col pb-3 shadow-md`}>
      <img src={coverImg} />
      <div className="mx-4 flex flex-row justify-between items-center">
        <h1 className={`${secondaryColor} text-headline`}>Continue game</h1>
        <span className={`w-8 h-8 rounded-full border ${secondaryColor} inline-flex justify-center items-center ${tertiaryColor} mr-4 scale-105`}>
          <img className="w-4 h-4 ml-1" src={img}/>
        </span>
      </div>
    </div>
  );
};

export default Card;
