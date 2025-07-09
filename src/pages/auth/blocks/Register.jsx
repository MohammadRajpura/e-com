import { Link } from "react-router-dom";
import { Button } from "../../../components/utilities";
import { registerSchema } from "../../../core/schema/register.schema";
import { useForm } from "react-hook-form";

const schema = registerSchema;

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="h-[299px] bg-orange-dark w-full">
        <h2 className="text-white text-[28px] text-center pt-[60px]">
          Create your
          <br />
          account
        </h2>
      </div>

      <div className="master-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-card bg-white shadow-[0px_20px_40px_0px_#E68B8A0F] backdrop-blur-[25px] p-[30px] pb-[50px] max-w-[335px] mx-auto mt-[-50px] rounded-[40px]">
            <h3 className="text-[20px] mb-[15px]">
              Welcome back! Please enter your details
            </h3>
            <div className="form-group flex flex-col mb-4">
              <label className="text-[15px]">
                Name <span className="text-red">*</span>
              </label>
              <input
                className="border border-[#D2D2D2] h-[48px] p-[10px] rounded-[5px] outline-none"
                {...register("name")}
                type="text"
              />
            </div>
            <div className="form-group flex flex-col mb-4">
              <label className="text-[15px]">
                Email Address <span className="text-red">*</span>
              </label>
              <input
                className="border border-[#D2D2D2] h-[48px] p-[10px] rounded-[5px] outline-none"
                {...register("email")}
                type="text"
              />
            </div>
            <div className="form-group flex flex-col mb-4">
              <label className="text-[15px]">
                Mobile Number <span className="text-red">*</span>
              </label>
              <div className="flex gap-5">
                <select
                  {...register("country_code")}
                  className="border border-[#D2D2D2] h-[48px] p-[10px] rounded-[5px] outline-none"
                >
                  <option value="+91">91</option>
                  <option value="+92">92</option>
                  <option value="+93">93</option>
                </select>
                <input
                  {...register("phone")}
                  className="border border-[#D2D2D2] h-[48px] p-[10px] rounded-[5px] outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group flex flex-col mb-4">
              <label className="text-[15px]">
                Password <span className="text-red">*</span>
              </label>
              <input
                {...register("password")}
                className="border border-[#D2D2D2] h-[48px] p-[10px] rounded-[5px] outline-none"
                type="password"
              />
            </div>

            <div className="form-group flex gap-2 mb-4">
              <input
                {...register("acceptTerms")}
                className="border border-[#D2D2D2]  rounded-[5px] outline-none"
                type="checkbox"
              />

              <label className="text-[15px]">
                I agree to all Term, Privacy and Fees
              </label>
            </div>
          </div>

          <div className="button flex flex-col items-center justify-center mt-[-30px] z-99 relative">
            <Button children="Sign Up" variant="primary" type="submit"></Button>

            <span className="block mt-5">
              Already have and account?{" "}
              <Link className="underline" to={"/auth/login"}>
                Sign In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Register };
