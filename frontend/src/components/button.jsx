const ButtonComp = ({btnName, btnFunction, btnType, btnColor, btnHoverColor, btntxtColor}) => {
    return ( 
        <div className={`font-roboto bg-${btnColor} text-mobile-label md:text-tablet-label xl:text-label w-fit m-5 p-2 rounded-lg text-${btntxtColor} shadow-1dp hover:${btnHoverColor}`}>
            <button type={btnType} onClick={btnFunction}>{btnName}</button>
        </div>
     );
}
 
export default ButtonComp;