import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavCategory from "./components/NavCategory";
import Chat from "./components/Chat";

// Import Pages
import Homepages from "./pages/Homepages";
import AllProducts from "./pages/AllProducts";
import Populer from "./pages/category/Populer";
import Terbaru from "./pages/category/Terbaru";
import Terlaris from "./pages/category/Terlaris";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";

function AppContent() {
  const { pathname } = useLocation();
  
  // ✅ Fix logic: excludeComponents harus boolean
  const excludeComponents = ["/login", "/signup"].includes(pathname);
  const showNavCategory = ["/allproducts", "/populer", "/terbaru", "/terlaris"].includes(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-raleway scrollbar-none scroll-smooth">
      {!excludeComponents && <Header />}

      {/* ✅ NavCategory hanya muncul di halaman tertentu */}
      {showNavCategory && <NavCategory />}

      <div className="flex-1 h-screen w-full">
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/populer" element={<Populer />} />
          <Route path="/terbaru" element={<Terbaru />} />
          <Route path="/terlaris" element={<Terlaris />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

    {!excludeComponents && <Chat />}

      {/* ✅ Footer tidak muncul di halaman login & signup */}
      {!excludeComponents && <Footer />}
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
