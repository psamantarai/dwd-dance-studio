import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" indexed element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
