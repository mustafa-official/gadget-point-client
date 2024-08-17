import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, updateProfileInfo, loading, setLoading, googleLogin } =
    useAuth();

  const handleSignUP = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = "hello";
    const password = e.target.password.value;
    try {
      setLoading(true);
      const result = await registerUser(email, password);
      console.log(result);
      await updateProfileInfo(name, photo);
      navigate("/");
      toast.success("Sign Up Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleLogin();
      navigate("/");
      toast.success("Sign Up Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="mt-20 sm:mt-28 container mx-auto py-4 px-4 flex items-center">
      {/* Form Section */}
      <div className="max-w-lg w-full mx-auto border border-gray-800 rounded-xl p-8">
        <form onSubmit={handleSignUP}>
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-gray-800 text-4xl font-extrabold">Sign Up</h3>
          </div>

          <div>
            <label className="text-gray-800 text-xs block mb-2">Name</label>
            <div className="relative flex items-center">
              <input
                type="text"
                name="name"
                required
                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                placeholder="Enter name"
              />
            </div>
          </div>
          {/* Email Input */}
          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Email</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                required
                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                placeholder="Enter email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Password</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                placeholder="Enter password"
              />
              {showPassword ? (
                <LiaEyeSlashSolid
                  color="gray"
                  onClick={handleShowPassword}
                  className="text-2xl cursor-pointer"
                ></LiaEyeSlashSolid>
              ) : (
                <LiaEyeSolid
                  color="gray"
                  onClick={handleShowPassword}
                  className="text-2xl cursor-pointer"
                ></LiaEyeSolid>
              )}
            </div>
          </div>

          {/* Sign In Button */}
          <div className="mt-12">
            <button
              disabled={loading}
              type="submit"
              className="disabled:cursor-not-allowed cursor-pointer w-full h-11 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
            >
              {loading ? (
                <ImSpinner3 className="animate-spin m-auto"></ImSpinner3>
              ) : (
                "Continue"
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <hr className="w-full border-gray-300" />
            <p className="text-sm text-gray-800 text-center">or</p>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Sign In Button */}
        </form>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          type="submit"
          className="disabled:cursor-not-allowed cursor-pointer w-full flex items-center justify-center gap-4 py-2 px-6 text-sm font-semibold tracking-wider text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
          <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>
          Continue with Google
        </button>
        <p className="text-gray-800 flex justify-center text-xs mt-4">
          Already have an account?
          <Link
            to="/sign-in"
            className="text-red-500 font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Sign In
          </Link>
        </p>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Register;
