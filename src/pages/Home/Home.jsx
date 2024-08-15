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

  console.log(brandName);

  const { data: products = [], isLoading } = useQuery({
    queryKey: [
      "products",
      search,
      brandName,
      category,
      priceRange,
      sortPrice,
      sortDate,
    ],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/products?search=${search}&brand=${brandName}&category=${category}&priceRange=${priceRange}&sortPrice=${sortPrice}&sortDate=${sortDate}`
      );
      return data;
    },
  });
console.log(sortPrice);
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
    </section>
  );
};

export default Home;
