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
      <div className="flex flex-col mx-[5vw] xl:flex-row xl:mx-[10vw]">
        <div className="info flex xl:flex-col my-[88px] items-center">
          <div className="mb-4">
            <h1 className="text-primary-400 sm:text-mobile-display md:text-tablet-display xl:text-display">
              SafePlay <span className="text-primary-100">Learn</span>
            </h1>
            <h2 className="sm:text-mobile-title md:text-tablet-title xl:text-title text-tertiary-300">
              Where Fun Meets Learining Safely!
            </h2>
          </div>
          <img className="xl:w-[499px] md:w-[400px] lg:w-[488px] sm:w-[348px]" src={illustration} />
        </div>
        {/* display login form as default and signup form on button click */}
        <div className="form flex justify-around">
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
