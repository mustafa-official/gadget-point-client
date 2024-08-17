import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
const ProductCard = ({ product }) => {
  const { name, brand_name, img, description, price, ratings, date_time } =
    product || {};
  const formattedDate = new Date(date_time).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return (
    <div className="relative flex flex-col justify-between w-full h-full overflow-hidden border border-gray-400  hover:-translate-y-2 transform transition duration-200">
      <div className="relative cursor-pointer mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img className="object-cover mx-auto" src={img} alt="product image" />
        <span className="absolute top-2 right-0 rounded-full bg-gray-800 px-2 py-0.5 text-center text-xs font-medium text-white">
          {brand_name}
        </span>
      </div>

      <div className="flex flex-col justify-between flex-grow mt-4 px-5 pb-5">
        <a href="">
          <h5 className="text-xl tracking-tight font-medium text-slate-900">
            {name}
          </h5>
        </a>

        <p className="text-sm mt-3 mb-2">{description}</p>

        <div className="mt-2 mb-1 flex items-center justify-between">
          <p>
            <span className="text-md font-medium text-red-500">
              {price.toLocaleString()} Tk
            </span>
          </p>

          <div className="flex items-center">
            <p className="flex items-center rounded text-red-500 px-2 py-1 text-[16px] font-semibold">
              {ratings} <IoMdStar size={18} />
            </p>
          </div>
        </div>

        <p className="mb-3 text-sm">{formattedDate}</p>

        <a
          href=""
          className="flex items-center justify-center bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
