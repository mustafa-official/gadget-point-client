import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductCard from "../../components/ProductCard";
import ReactLoading from "react-loading";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
const brands = [
  "Lenovo",
  "HP",
  "Dell",
  "ASUS",
  "Acer",
  "Apple",
  "Microsoft",
  "CyberPowerPC",
  "MSI",
  "Samsung",
  "LG",
  "BenQ",
  "ViewSonic",
  "Philips",
  "AOC",
  "Canon",
  "Nikon",
  "Sony",
  "Fujifilm",
  "Olympus",
];

const allCategories = ["Laptop", "Desktop", "Monitor", "Camera"];

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = React.useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [sortDate, setSortDate] = useState("");

  //for pagination
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: products = [], isLoading } = useQuery({
    queryKey: [
      "products",
      search,
      brandName,
      category,
      priceRange,
      sortPrice,
      sortDate,
      itemsPerPage,
      currentPage,
    ],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/products?page=${currentPage}&size=${itemsPerPage}&search=${search}&brand=${brandName}&category=${category}&priceRange=${priceRange}&sortPrice=${sortPrice}&sortDate=${sortDate}`
      );

      return data;
    },
  });

  const { data: count = 0 } = useQuery({
    queryKey: ["pageCount", search, brandName, category, priceRange],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/page-count?category=${category}&brand=${brandName}&search=${search}&priceRange=${priceRange}`
      );
      return data.count;
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.toLowerCase();
    setSearch(name);
    setCurrentPage(1);
  };
  const handleBrandName = (event) => {
    setBrandName(event);
  };
  const handleCategory = (event) => {
    setCategory(event);
    setCurrentPage(1);
  };
  const handlePriceRange = (event) => {
    setPriceRange(event);
    setCurrentPage(1);
  };
  const handleSortPrice = (event) => {
    setSortPrice(event);
    setSortDate("");
  };
  const handleSortDate = (event) => {
    setSortDate(event);
    setSortPrice("");
  };

  //for pagination

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationBtn = (num) => {
    setCurrentPage(num);
  };

  const {user} = useAuth();
  console.log(user);

  return (
    <section className="container mx-auto px-4 mt-28">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              name="name"
              className="w-full border h-11 p-4 pr-8 rounded-md border-gray-400"
              placeholder="Search product name"
            />
            <button
              className="absolute top-1/2 right-2 hover:scale-125 transition duration-150 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
              type="submit"
            >
              <FiSearch color="gray" size={18} />
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap items-center mt-5 gap-3 sm:gap-4 justify-center">
        <div>
          <Select label="Brand Name" onChange={handleBrandName}>
            {brands?.map((brand, index) => (
              <Option key={index} value={brand}>
                {brand}
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <Select label="Category" onChange={handleCategory}>
            {allCategories?.map((category, index) => (
              <Option key={index} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <Select label="Price Range" onChange={handlePriceRange}>
            <Option value="25000-35000">25000 - 35000 Tk</Option>
            <Option value="41000-50000">41000 - 50000 Tk</Option>
            <Option value="51000-60000">51000 - 60000 Tk</Option>
            <Option value="61000-85000">61000 - 85000 Tk</Option>
          </Select>
        </div>
        <div>
          <Select label="Sort By Price" onChange={handleSortPrice}>
            <Option value="low-to-high">Low to High</Option>
            <Option value="high-to-low">High to Low</Option>
          </Select>
        </div>
        <div>
          <Select label="Sort By Date" onChange={handleSortDate}>
            <Option value="newest-first">Newest First</Option>
            <Option value="oldest-first">Oldest First</Option>
          </Select>
        </div>
      </div>

      {isLoading && (
        <div className="flex min-h-[70vh] justify-center items-center px-6 lg:px-12">
          <ReactLoading type="spin" color="red" height={35} width={35} />
        </div>
      )}
      {products?.length === 0 && !isLoading && (
        <div className="max-w-sm mx-auto min-h-[50vh] flex flex-col items-center justify-center py-8 px-4 text-center">
          <svg
            className="w-12 h-12 dark:text-gray-400 text-gray-700"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="200px"
            width="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="File_Off">
              <g>
                <path d="M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z" />
                <path d="M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z" />
              </g>
            </g>
          </svg>
          <h3 className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200">
            Product not found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            The file you are looking for could not be located.
          </p>
        </div>
      )}
      <div className="grid gap-4 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      {/* Pagination button */}
      {count > 8 && (
        <div className="flex justify-center mt-12 mb-6">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationBtn(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200  disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-gray-800  hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1 text-sm">previous</span>
            </div>
          </button>

          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationBtn(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-gray-800 text-white" : ""
              }  px-4 border border-gray-400 text-sm  mx-1 transition-colors duration-300 transform  sm:inline hover:bg-gray-800  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationBtn(currentPage + 1)}
            className="px-4 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200  hover:bg-gray-800 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1 text-sm">Next</span>
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Home;
