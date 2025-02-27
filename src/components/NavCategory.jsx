import { Link, useLocation } from "react-router-dom";

const NavCategory = () => {
  const location = useLocation();

  const categoryProducts = [
    { label: "POPULER", to: "/populer" },
    { label: "TERBARU", to: "/terbaru" },
    { label: "TERLARIS", to: "/terlaris" },
  ];

  // Teks berganti sesuai path
  const activeCategory = categoryProducts.find((item) => item.to === location.pathname)?.label || "Semua Kategori";

  return (
    <div className="relative w-full max-w-screen-2xl flex flex-col md:flex-row items-center mx-auto mt-28 px-4">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl whitespace-nowrap md:text-3xl font-bold text-[#153448] mb-4 md:mb-0 md:mr-5">
        {activeCategory}
      </h1>

      {/* Category Navigation (Background lebih panjang) */}
      <div className="bg-[#DFD0B8] p-3 sm:p-5 rounded-2xl w-full flex justify-center md:justify-start items-center gap-3 sm:gap-5">
        {categoryProducts.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={index}
              to={item.to}
              className={`text-sm sm:text-md md:text-lg font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-2xl transition
                ${
                  isActive
                    ? "bg-[#153448] text-[#DFD0B8]"
                    : "bg-[#3C5B6F] text-white hover:bg-[#153448] hover:text-[#DFD0B8]"
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavCategory;
