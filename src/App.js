import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SubNav from "./components/Navbar/SubNav/SubNav";
import MainNav from "./components/Navbar/MainNav/MainNav";
import GoToTop from "./GoToTop";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutFacility from "./pages/AboutUs/AboutFacility";

function App() {
  return (
    <BrowserRouter>
      <GoToTop />
      <SubNav />
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutfacility" element={<AboutFacility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
