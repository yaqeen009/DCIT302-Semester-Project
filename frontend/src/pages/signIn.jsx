import { useState } from "react";
import illustration from "../assets/Ilustrasion.png";
import Login from "../components/login";
import SignUp from "../components/signup";

const SignIn = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  const toggle = (state) => {
    if (state === isLogIn) {
      setIsLogIn(false);
      setIsSignUp(true);
    } else {
      setIsLogIn(true);
      setIsSignUp(false);
    }
  };

  return (
    <div className="login font-comic bg-secondary-200 overflow-auto">
      <div className="flex flex-col xl:flex-row h-[100vh] xl:mx-[10vw] xl:items-center">
        {/* Info section */}
        <div className="info flex flex-col md:flex-row xl:flex-col px-8 items-center bg-secondary-100 xl:bg-secondary-200 xl:h-fit h-[55vh] w-full xl:w-[1024px]">
          <div className="mb-4 md:mr-5 text-center xl:text-start">
            <h1 className="text-primary-400 text-mobile-display md:text-tablet-display xl:text-display">
              SafePlay <span className="text-primary-100">Learn</span>
            </h1>
            <h2 className="text-tertiary-300 text-sm md:text-base xl:text-lg">
              Where Fun Meets Learning Safely!
            </h2>
          </div>
          <img
            className="xl:w-[499px] md:w-[400px] w-[348px] h-auto"
            src={illustration}
            alt="Illustration"
          />
        </div>

        {/* Form section */}
        <div className="form flex justify-around xl:justify-normal mt-8 md:mt-0 xl:w-[474.3px]  rounded-lg p-4">
          {isSignUp ? (
            <SignUp isOpen={isSignUp} toggle={() => toggle(isSignUp)} />
          ) : (
            <Login isOpen={isLogIn} toggle={() => toggle(isLogIn)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
