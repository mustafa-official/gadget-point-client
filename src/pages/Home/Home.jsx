import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductCard from "../../components/ProductCard";
import ReactLoading from "react-loading";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
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
    queryKey: ["pageCount", category],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/page-count?category=${category}`
      );
      return data.count;
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.toLowerCase();
    setSearch(name);
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
  };
  const handleSortPrice = (event) => {
    setSortPrice(event);
  };
  const handleSortDate = (event) => {
    setSortDate(event);
  };

  //for pagination

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationBtn = (num) => {
    setCurrentPage(num);
  };

  if (isLoading)
    return (
      <div className="flex min-h-[calc(100vh-80px)] justify-center items-center px-6 lg:px-12">
        <ReactLoading type="spin" color="red" height={40} width={40} />
      </div>
    );
  return (
    <section>
      <div className="flex flex-wrap items-center mt-5 gap-3 sm:gap-2 justify-center">
        <div>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full border h-[41px] shadow p-3 pr-8 rounded-lg border-[#B0BEC5]"
                placeholder="Search..."
              />
              <button
                className="absolute top-1/2 right-2 hover:scale-125 transition duration-150 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                type="submit"
              >
                <FiSearch size={18} />
              </button>
            </div>
          </form>
        </div>
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
          </Select>
        </div>
      </div>
      <div className="grid gap-4 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      {/* Pagination button */}
      {40 > 5 && (
        <div className="flex justify-center mt-12">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationBtn(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
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
                currentPage === btnNum ? "bg-blue-500 text-white" : ""
              }  px-4 border  mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationBtn(currentPage + 1)}
            className="px-4 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
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
