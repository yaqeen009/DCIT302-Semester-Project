const Button = ({btnName, btnFunction, btnType}) => {
    return ( 
        <div className="font-roboto bg-primary-400 w-fit m-5 p-2 rounded-lg text-tertiary-400 shadow-sm hover:text-tertiary-400  hover:bg-secondary-400">
            <button type={btnType} onClick={btnFunction}>{btnName}</button>
        </div>
     );
}
 
export default Button;