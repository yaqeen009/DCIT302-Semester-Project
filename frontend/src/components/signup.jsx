import { useNavigate } from "react-router-dom";
import ButtonComp from "./button";

const SignUp = ({ toggle, isOpen }) => {
    const nav= useNavigate()
    const btnFunction = (e) => {
        e.preventDefault();
        nav("/home")
    }
  return (
    <div>
      {isOpen ? (
        <div className="form xl:my-[88px] bg-secondary-300 w-fit h-fit xl:py-[10vh] md:py-[5vh] py-[2vh] px-5 align-middle xl:ml-[50px] shadow-2dp rounded-lg">
          <form onSubmit={btnFunction} className="flex flex-col items-center font-roboto">
            <input
              type="email"
              placeholder="Enter email here..."
              className="xl:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label xl:w-[456px] md:w-[330px] w-[220px] xl:h-16 md:h-8 h-4 py-5 md:py-6 xl:py-8 pl-4 rounded-lg md:my-4 xl:my-4 my-2"
              required
            />
            <input
              type="text"
              placeholder="Enter username here..."
              className="xl:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label xl:w-[456px] md:w-[330px] w-[220px] xl:h-16 md:h-8 h-4 py-5 md:py-6 xl:py-8 pl-4 rounded-lg md:my-4 xl:my-4 my-2"
              required
            />
            <input
              type="text"
              placeholder="Enter password here..."
              className="xl:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label xl:w-[456px] md:w-[330px] w-[220px] xl:h-16 md:h-8 h-4 py-5 md:py-6 xl:py-8 pl-4 rounded-lg md:my-4 xl:my-4 my-2"
              required
            />
            <input
              type="text"
              placeholder="Confirm password"
              className="xl:placeholder:text-label md:placeholder:text-tablet-label placeholder:text-mobile-label xl:w-[456px] md:w-[330px] w-[220px] xl:h-16 md:h-8 h-4 py-5 md:py-6 xl:py-8 pl-4 rounded-lg md:my-4 xl:my-4 my-2"
              required
            />
            <ButtonComp
              btnName={"Create Account"}
              btnType={"submit"}
              btnColor={"secondary-400"}
              btntxtColor={"tertiary-400"}
              btnHoverColor={"primary-400"}
            />
            <p className="text-tertiary-300 xl:text-label md:text-tablet-label text-mobile-label ">
              Already have an account?
              <button onClick={toggle} className="text-primary-400 xl:text-label md:text-tablet-label text-mobile-label">Click here</button>{" "}
              to create one
            </p>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default SignUp;
