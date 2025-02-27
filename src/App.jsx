import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Import Compo
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

function AppContent() {

  const location = useLocation(); //get location
  const showNavCategory = ["/allproducts", "/populer", "/terbaru", "/terlaris"].includes(location.pathname);

  return (
<div className="flex flex-col w-full bg-white font-raleway scrollbar-none scroll-smooth">
<Header />
      {showNavCategory && <NavCategory />}
      <div className="flex-1 mt-5 w-full">
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/populer" element={<Populer />} />
          <Route path="/terbaru" element={<Terbaru />} />
          <Route path="/terlaris" element={<Terlaris />} />
        </Routes>

        <Chat />
        <Footer />
      </div>
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
