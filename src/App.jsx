import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepages from "./pages/Homepages";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

function AppContent() {
  return (
<div className="flex flex-col w-full bg-white font-raleway scrollbar-none scroll-smooth">
<Header />
      <div className="flex-1 mt-5 w-full">
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/productdetails" element={<ProductDetails />} />
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
