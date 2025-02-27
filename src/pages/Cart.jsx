import { useState } from "react";
import { sepatu, pakaian } from "../assets/Assets";

const initialCart = [
  {
    id: 1,
    store: "Alpataire Shoes Store",
    name: "Balencinaga Track Shoes",
    variant: "Hitam, 41",
    price: 30000,
    shipping: 10000,
    quantity: 1,
    image: sepatu,
    checked: true,
  },
  {
    id: 2,
    store: "Alpataire Shoes Store",
    name: "Balencinaga Track Shoes",
    variant: "Hitam, 41",
    price: 30000,
    shipping: 10000,
    quantity: 1,
    image: pakaian,
    checked: false,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return item.checked ? total + item.price * item.quantity : total;
    }, 0) - 2000; // Diskon Rp 2000
  };

  const toggleCheck = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="mb-20 mt-28 px-5 md:px-10">
      <div className="bg-[#DFD0B8] rounded-xl shadow-md mb-5 p-4 hidden md:flex justify-between font-semibold text-md">
        <span>Produk</span>
        <span>Harga Satuan</span>
        <span>Kuantitas</span>
        <span>Total Harga</span>
        <span>Aksi</span>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-[#DFD0B8] p-4 rounded-lg mt-3 flex flex-col md:flex-row md:items-center md:gap-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(item.id)} className="w-5 h-5" />
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
            </div>
            <div className="flex-1 text-md mt-2 md:mt-0">
              <h1 className="font-semibold">{item.store}</h1>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">Varian: {item.variant}</p>
              <p className="text-gray-500">Ongkos Kirim: Rp {item.shipping.toLocaleString()}</p>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-3 mt-3 md:mt-0">
              <span className="text-lg font-semibold">Rp {item.price.toLocaleString()}</span>
              <input type="number" value={item.quantity} className="border w-12 text-center rounded-md" readOnly />
              <span className="text-lg font-semibold">Rp {(item.price * item.quantity).toLocaleString()}</span>
              <button className="text-red-500 hover:underline" onClick={() => removeItem(item.id)}>Hapus</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#DFD0B8] p-4 rounded-lg mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-3 items-center">
          <input type="checkbox" checked={cart.every(item => item.checked)} className="w-5 h-5" />
          <span className="text-lg">Pilih Semua ({cart.length})</span>
          <button className="text-red-500 hover:underline text-lg">Hapus</button>
        </div>
        <div className="text-right mt-3 md:mt-0">
          <p className="text-gray-500 text-lg">Voucher Belanja</p>
          <p className="font-bold text-lg">Rp {calculateTotal().toLocaleString()}</p>
          <p className="text-green-600 text-lg">Hemat Rp 2.000</p>
          <button className="bg-black text-white px-6 py-2 rounded-md mt-2 hover:bg-gray-800">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
