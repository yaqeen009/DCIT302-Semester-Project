import { useNavigate } from "react-router-dom";
import Button from "./button";

const Login = ({ toggle, isOpen }) => {
  const nav = useNavigate();
  const btnFunction = () => {
    nav("/home");
  };
  return (
    <div>
      {isOpen ? (
        <div className="form xl:my-[88px] bg-secondary-300 w-fit h-fit xl:py-[20vh] py-[5vh] px-5 align-middle xl:ml-[105px]">
          <form
            onSubmit={btnFunction}
            className="flex flex-col items-center font-roboto"
          >
            <input
              type="text"
              placeholder="Enter username or email here..."
              className="xl:placeholder:text-label md:placeholder:text-tablet-label sm:placeholder:text-mobile-label xl:w-[456px] md:w-[330px] xl:h-16 md:h-8 py-8 pl-4 rounded-lg my-4"
              required
            />
            <input
              type="text"
              placeholder="Enter password here..."
              className="xl:placeholder:text-label md:placeholder:text-tablet-label sm:placeholder:text-mobile-label xl:w-[456px] md:w-[330px] xl:h-16 md:h-8 py-8 pl-4 rounded-lg my-4"
              required
            />
            <Button btnName={"Login"} btnType={"submit"} />
            <p className="text-tertiary-300 text-label">
              Don't have an account?{" "}
              <button onClick={toggle} className="text-primary-400">
                Click here
              </button>{" "}
              to create one
            </p>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
