import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import GlobalApi from "../API/GlobalApi";
import { Link } from "react-router-dom";
import {
  sliderPhoto1,
  sliderPhoto2,
  sliderPhoto3,
  elektronik,
  pakaian,
  sepatu,
  aksesoris,
  makanan,
  fashionMuslim,
  fashionBayi,
  olahraga,
  furniture,
  hobby,
} from "../assets/Assets";

const Homepages = () => {
  const elementRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const { scrollXProgress } = useScroll(); // Ambil progress scroll horizontal
  const scrollRef = useRef(null);
  const opacity = useTransform(scrollXProgress, [0, 0.8], [1, 0]); // Fade out efek

  // Efek fade untuk sisi kiri & kanan saat scroll
  const fadeLeft = useTransform(scrollXProgress, [0, 0.1], [0, 1]);
  const fadeRight = useTransform(scrollXProgress, [0.9, 1], [1, 0]);

  // Hardcoded Categories (Gak pakai API)
  const categories = [
    { name: "Elektronik", image: elektronik },
    { name: "Pakaian", image: pakaian },
    { name: "Sepatu", image: sepatu },
    { name: "Aksesoris Fashion", image: aksesoris },
    { name: "Makanan & Minuman", image: makanan },
    { name: "Fashion Muslim", image: fashionMuslim },
    { name: "Fashion Bayi", image: fashionBayi },
    { name: "Olahraga & Outdoor", image: olahraga },
    { name: "Perlengkapan Rumah", image: furniture },
    { name: "Mainan & Hobby", image: hobby },
  ];

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

  const slides = [
    {
      title: "SiStore",
      description: "Discover the best in fashion with our latest collections.",
      image: sliderPhoto1,
    },
    {
      title: "New Collection",
      description: "Comfort and style for any occasion.",
      image: sliderPhoto2,
    },
    {
      title: "Special Offer",
      description: "Up to 50% discount on selected items.",
      image: sliderPhoto3,
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      slide("right");
    }, 4000); // Auto-slide tiap 4 detik

    return () => clearInterval(interval);
  }, [activeIndex]);

  const smoothScroll = (index) => {
    if (!elementRef.current) return;
    const targetScroll = index * elementRef.current.clientWidth;
    elementRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    setActiveIndex(index);
  };

  const slide = (direction) => {
    if (!elementRef.current) return;
    const nextIndex =
      direction === "right"
        ? (activeIndex + 1) % slides.length
        : (activeIndex - 1 + slides.length) % slides.length;
    smoothScroll(nextIndex);
  };

  return (
    <div>
      {/* Slider */}
      <section className="relative w-full max-w-screen-2xl mx-auto mt-28">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            ref={elementRef}
            className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide"
            onScroll={() => {
              if (!elementRef.current) return;
              const index = Math.round(
                elementRef.current.scrollLeft / elementRef.current.clientWidth
              );
              setActiveIndex(index);
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center px-0"
              >
                <div className="bg-[#e8d9c0] rounded-lg flex items-center justify-between relative">
                  <div className="w-1/2">
                    <h2 className="text-5xl font-bold text-[#1a3a53] font-playfair text-center mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-[#1a3a53] text-lg text-center">
                      {slide.description}
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="max-h-[20rem] ml-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => smoothScroll(index)}
                className={`w-10 h-1 rounded-full cursor-pointer hover:bg-[#1a3a53] transition ${
                  activeIndex === index ? "bg-[#1a3a53]" : "bg-gray-400"
                }`}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => slide("left")}
            className="absolute left-4 top-1/2 transform hidden md:block -translate-y-1/2 bg-white/50 hover:text-white cursor-pointer text-black w-10 h-10  items-center justify-center rounded-full shadow-lg hover:bg-[#2d5a7d] transition z-10"
          >
            <RiArrowLeftWideFill className="text-4xl" />
          </button>
          <button
            onClick={() => slide("right")}
            className="absolute right-4 top-1/2 transform hidden md:block -translate-y-1/2 bg-white/50 hover:text-white cursor-pointer text-black w-10 h-10  items-center justify-center rounded-full shadow-lg hover:bg-[#2d5a7d] transition z-10"
          >
            <RiArrowRightWideFill className="text-4xl" />
          </button>
        </div>
      </section>

      {/* Product by Categories */}
      <section className="md:w-full max-w-screen-2xl mx-auto mt-10 px-6">
        <div className="bg-[#1F4A6D] rounded-lg p-10 shadow-lg">
          <h2 className="text-white text-3xl font-bold mb-6">Kategori</h2>
          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-5 md:grid-rows-2 md:overflow-visible scrollbar-hide">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white hover:bg-[#DFCDA5] rounded-lg shadow-lg flex flex-col items-center p-4 transition transform hover:scale-105 hover:origin-center cursor-pointer min-w-[120px]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 object-contain mb-3"
                />
                <p className="text-[#1F4A6D] font-semibold text-center whitespace-nowrap">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLASH SALE */}
      <section className="bg-[#DFCDA5] rounded-xl w-full mx-auto mt-10 px-8 md:px-20 py-12 flex flex-col md:flex-row items-center relative overflow-hidden">
        {/* Bagian Kiri */}
        <motion.div
          className="w-full md:w-1/3 text-center md:text-left space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-[#1F4A6D]">Flash Sale!</h1>
          <p className="text-[#1F4A6D] text-lg font-semibold leading-relaxed">
            Dapatkan diskon hingga <b>7%</b> untuk produk pilihan. Stok
            terbatas, buruan sebelum kehabisan!
          </p>
          <h2 className="text-2xl font-bold text-[#1F4A6D]">
            Jangan Sampai Ketinggalan!
          </h2>
        </motion.div>

        {/* Bagian Kanan - Scrollable Products */}
        <div
          ref={scrollRef}
          className="w-full md:w-2/3 flex overflow-x-auto scrollbar-hide py-5"
        >
          <motion.div
            className="flex space-x-6 min-w-max"
            drag="x"
            dragConstraints={{ left: -250, right: 0 }}
          >
            {products?.length > 0 ? (
              products.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl cursor-pointer shadow-md p-10 flex-shrink-0 w-48 md:w-56 h-[300px] flex flex-col justify-between items-center transition hover:scale-105"
                  whileHover={{ scale: 1.08 }}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-36 h-36 object-contain"
                  />
                  <p className="text-[#1F4A6D] font-semibold text-center text-sm line-clamp-2">
                    {product.title}
                  </p>
                  <p className="text-[#1F4A6D] font-bold text-lg">
                    ${product.price}
                  </p>
                </motion.div>
              ))
            ) : (
              <p className="text-[#1F4A6D] font-semibold">
                Tidak ada produk tersedia.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Product List from API */}
      <section className="w-full max-w-screen-2xl mx-auto mt-24 px-6">
        <h2 className="text-[#1F4A6D] flex justify-center text-3xl font-bold mb-6">
          Rekomendasi Produk
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-10">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="bg-[#FEFAF6] rounded-lg shadow-lg flex flex-col p-4 transition hover:bg-[#DFCDA5] hover:scale-105 ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 h-40 object-contain mb-3 mx-auto"
                />
                <p className="text-[#1F4A6D] mt-8 font-semibold line-clamp-2 flex-grow">
                  {product.title}
                </p>
                <p className="text-[#1F4A6D] mt-2 text-left text-2xl font-bold">
                  ${product.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center w-full">Loading...</p>
          )}
        </div>
        <div className="flex mt-10 mb-10 justify-center">
          <Link
            to="/allproducts"
            className="p-3 font-bold text-2xl bg-[#DFD0B8] rounded-2xl text-[#1F4A6D] hover:bg-[#1F4A6D] hover:text-[#DFD0B8] ease-in-out duration-300 cursor-pointer"
          >
            LIHAT LAINNYA
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepages;
