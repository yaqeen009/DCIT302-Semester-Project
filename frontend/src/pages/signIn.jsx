import { useState } from "react";
import illustration from "../assets/Ilustrasion.png";
import Login from "../components/login";
import SignUp from "../components/signup";

const SignIn = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  const toggle =(state) => {
    if (state === isLogIn) {
      setIsLogIn(false)
      setIsSignUp(true)
    }else{
      setIsLogIn(true)
      setIsSignUp(false)
    }
  }
  return (
    <div className="login font-comic">
      <div className="flex flex-col xl:flex-row xl:mx-[10vw] h-[100vh] xl:items-center">
        <div className="info flex flex-col md:flex-row xl:flex-col px-8 items-center bg-secondary-100 xl:bg-secondary-200 xl:h-fit h-[55vh]">
          <div className="mb-4 md:mr-5 text-center xl:text-start ">
            <h1 className="text-primary-400 text-mobile-display md:text-tablet-display xl:text-display">
              SafePlay <span className="text-primary-100">Learn</span>
            </h1>
            <h2 className="sm:text-mobile-title md:text-tablet-title xl:text-title text-tertiary-300">
              Where Fun Meets Learining Safely!
            </h2>
          </div>
          <img className="xl:w-[499px] xl:h-fit md:w-[400px] md:h-fit lg:w-[488px] w-[348px] h-[230px]" src={illustration} />
        </div>
        {/* display login form as default and signup form on button click */}
        <div className="form flex justify-around xl:justify-normal -mt-10 md:-mt-20 xl:mt-0">
          {isSignUp ? (
            <SignUp isOpen={isSignUp} toggle={()=>toggle(isSignUp)} />
          ) : (
            <Login isOpen={isLogIn} toggle={()=>toggle(isLogIn)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
