import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiUserPlus } from "react-icons/fi";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/sign-in");
      toast.success("Logout Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <header className="bg-[#dbdbdb50]  backdrop-blur-md fixed top-0 left-0 right-0  z-50">
      <div className="container mx-auto py-4 px-4 flex items-center">
        {/* Logo */}
        <div className="mr-auto md:w-48 flex-shrink-0">
          <Link to="/">
            <h2 className="text-xl sm:text-2xl text-gray-800 font-extrabold">
              Gadget <span className="text-red-500">Point</span>
            </h2>
          </Link>
        </div>

        {/* Buttons */}
        <nav>
          <ul className="xl:w-48 flex items-center justify-end">
            {!user && (
              <li className="ml-2  relative inline-block">
                <button className="px-[10px] py-[6px]  rounded-md border border-red-600 w-max border-neutral-300 bg-neutral-100 text-neutral-500 text-[16px] hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                  <Link
                    to="/sign-in"
                    className="flex items-center text-red-500 font-medium gap-2"
                  >
                    <span className="hidden sm:flex">Account</span>
                    <FiUserPlus color="red" size={18} />
                  </Link>{" "}
                </button>
              </li>
            )}

            {user && (
              <div className="relative font-[sans-serif] w-max mx-auto">
                <button
                  type="button"
                  id="dropdownToggle"
                  className="px-2 w-max py-2 flex justify-center items-center rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
                  onClick={handleToggle}
                >
                  <img
                    src="https://readymadeui.com/profile_6.webp"
                    className="w-7 h-7 mr-[6px] rounded-full shrink-0"
                    alt="Profile"
                  />
                  <span className="hidden sm:flex">{user?.displayName}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 fill-gray-400 inline ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <ul
                    id="dropdownMenu"
                    className="absolute block shadow-lg bg-white py-2 z-[1000] w-max left-0 right-0 rounded-lg max-h-96 overflow-auto"
                  >
                    <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4 mr-3"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                          data-original="#000000"
                        ></path>
                      </svg>
                      {user?.email}
                    </li>

                    <button
                      onClick={() => handleLogout()}
                      className="py-2.5 px-5 flex items-center w-full hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
                    >
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-4 h-4 mr-3"
                          viewBox="0 0 6.35 6.35"
                        >
                          <path
                            d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        Logout
                      </span>
                    </button>
                  </ul>
                )}
              </div>
            )}

            <li className="ml-2 relative inline-block">
              <div className="cursor-pointer">
                <p className="absolute cursor-pointer -top-1 right-0 z-10  flex justify-center items-center w-4 h-4 bg-gray-800 text-white text-xs font-medium  rounded-full">
                  3
                </p>
                <svg
                  className="h-9 w-9 p-2 text-red-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
              </div>
            </li>
            <li className="ml-2  relative inline-block">
              <div className="cursor-pointer">
                <p className="absolute  -top-1 right-0 z-10  flex justify-center items-center w-4 h-4 bg-gray-800 text-white text-xs font-medium rounded-full">
                  8
                </p>
                <svg
                  className="h-9 w-9 p-2 text-red-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                  ></path>
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
