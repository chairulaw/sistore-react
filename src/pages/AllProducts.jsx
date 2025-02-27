import axios from "axios"
import GlobalApi from "../API/GlobalApi";
import { useEffect, useState } from "react";

const AllProducts = () => {

    const [products, setProducts] = useState([]);

  // Product API
  useEffect(() => {
    GlobalApi.getAllProducts()
      .then((response) => {
        console.log("API Response:", response.data);
        setProducts(response.data); // Sesuaikan dengan struktur data dari API
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="w-full max-w-screen-2xl mb-20 mx-auto mt-10 px-6">
    <h2 className="text-[#1F4A6D] flex justify-center text-3xl font-bold mb-6">
    Rekomendasi Produk
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div
            key={index}
            className="bg-[#FEFAF6] rounded-lg shadow-lg flex flex-col items-center p-4 transition hover:bg-[#DFCDA5] hover:scale-105 ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-40 h-40 object-contain mb-3"
            />
            <p className="text-[#1F4A6D] mt-8 font-semibold">
              {product.title}
            </p>
            <p className="text-[#1F4A6D] mt-2 justify-center font-black">
              ${product.price}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center w-full">Loading...</p>
      )}
    </div>
  </div>
  )
}

export default AllProducts