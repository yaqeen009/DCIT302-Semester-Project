import { useNavigate } from "react-router-dom";
import Button from "./button";

const Login = ({ toggle, isOpen }) => {
    const nav = useNavigate()
  const btnFunction = () => {
    nav("/home")
  };
  return (
    <div>
      {isOpen ? (
        <div className="form my-[88px] bg-secondary-300 w-fit h-fit py-[20vh] px-5 align-middle ml-[105px]">
          <form onSubmit={btnFunction} className="flex flex-col items-center font-roboto">
            <input
              type="text"
              placeholder="Enter username or email here..."
              className="placeholder:text-label w-[456px] h-16 py-8 pl-4 rounded-lg my-4"
              required
            />
            <input
              type="text"
              placeholder="Enter password here..."
              className="placeholder:text-label w-[456px] h-16 py-8 pl-4 rounded-lg my-4"
              required
            />
            <Button
              btnName={"Login"}
              btnType={"submit"}
            />
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
