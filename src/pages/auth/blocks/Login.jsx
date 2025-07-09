import { Link } from "react-router-dom";
import { Button } from "../../../components/utilities";

const Login = () => {
  return (
    <div>
      <div className="h-[299px] bg-orange-dark w-full">
        <h2 className="text-white text-[28px] text-center pt-[60px]">
          Welcome Back! <br />
          Let's Get Started
        </h2>
      </div>

      <div className="master-form-wrapper">
        <form>
          <div className="form-card bg-white shadow-[0px_20px_40px_0px_#E68B8A0F] backdrop-blur-[25px] p-[30px] pb-[50px] max-w-[335px] mx-auto mt-[-50px] rounded-[40px]">
            <h3 className="text-[20px] mb-[15px]">
              Access Your Account and Explore More
            </h3>
            <div className="form-group flex flex-col mb-4">
              <label className="text-[15px]">
                Email Address <span className="text-red">*</span>
              </label>
              <input
                className="border border-[#D2D2D2] h-[48px] p-[10px] rounded-[5px] outline-none"
                type="text"
              />
            </div>
            <div className="form-group flex flex-col mb-4">
              <label className="text-[15px]">
                Password <span className="text-red">*</span>
              </label>
              <input
                className="border border-[#D2D2D2] h-[48px] p-[10px] rounded-[5px] outline-none"
                type="password"
              />
            </div>

            <span className="text-black opacity-50 underline">
              Forgot Password?
            </span>
          </div>

          <div className="button flex flex-col items-center justify-center mt-[-30px] z-99 relative">
            <Button children="Sign in" variant="primary" type="submit"></Button>

            <span className="block mt-5">
              Not a member?{" "}
              <Link to={"/auth/register"} className="underline">
                Create an account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
