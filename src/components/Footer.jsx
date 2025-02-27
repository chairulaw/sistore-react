import { bni, bca, jnt, jne, mandiri, ninja, sicepat } from "../assets/Assets";

const Footer = () => {
  return (
    <footer className="bg-[#3C5B6F] text-[#DFD0B8] ">
      <div className="max-w-screen-2xl py-12 mx-auto px-6">
        {/* Header Footer */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left mb-6">
          <h2 className="text-3xl font-[playfair] font-bold hover:text-white cursor-pointer">SiStore</h2>
          <h2 className="text-3xl font-[playfair] font-bold hover:text-white cursor-pointer">Si Products</h2>
          <h2 className="text-3xl font-bold hover:text-white cursor-pointer">More Info</h2>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-center md:text-left mb-8">
          Lorem ipsum dolor sit amet consectetur. In quam volutpat sed quis sed adipiscing vel.
          Quis sociis semper vel praesent. Nullam mattis massa a amet feugiat adipiscing lorem...
        </p>

        {/* Links dan Informasi */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Layanan Pelanggan */}
          <div>
            <h3 className="font-bold mb-2">Layanan Pelanggan</h3>
            <ul className="text-sm cursor-pointer space-y-1">
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Bantuan</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Metode Pembayaran</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Lacak Pengiriman</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Garansi SiStore</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Hubungi Kami</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Gratis Ongkir</li>
            </ul>
          </div>

          {/* Jelajahi SiStore */}
          <div>
            <h3 className="font-bold mb-2">Jelajahi SiStore</h3>
            <ul className="text-sm cursor-pointer space-y-1">
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Tentang Kami</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Kebijakan SiStore</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Kebijakan Privasi</li>
              <li className="hover:text-white hover:bg-gray-500 rounded-lg ease-in">Flash Sale</li>
            </ul>
          </div>

          {/* Pembayaran */}
          <div>
            <h3 className="font-bold mb-2">Pembayaran</h3>
            <div className="flex space-x-2">
              <img src={bca} alt="BCA" className="h-6 cursor-pointer" />
              <img src={bni} alt="BNI" className="h-6 cursor-pointer" />
              <img src={mandiri} alt="Mandiri" className="h-6 cursor-pointer" />
            </div>
          </div>

          {/* Pengiriman */}
          <div>
            <h3 className="font-bold mb-2">Pengiriman</h3>
            <div className="flex space-x-2">
              <img src={jne} alt="JNE" className="h-6 cursor-pointer" />
              <img src={jnt} alt="J&T" className="h-6 cursor-pointer" />
              <img src={ninja} alt="Ninja" className="h-6 cursor-pointer" />
              <img src={sicepat} alt="SiCepat" className="h-6 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-end space-x-4 mt-6">
          <a href="#" className="text-xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      
      {/* Copyright Pindah Ke Fixed */}
    <div className="bg-[#153448] px-5 text-sm py-5 md:py-4  bottom-0 w-full">
      <p className="md:text-2xl text-white font-semibold">Copyright 2024 SI 2022 | SI ITEBA</p>
    </div>
    </footer>
  );
};





export default Footer;
