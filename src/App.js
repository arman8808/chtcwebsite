import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SubNav from "./components/Navbar/SubNav/SubNav";
import MainNav from "./components/Navbar/MainNav/MainNav";
import GoToTop from "./GoToTop";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutFacility from "./pages/AboutUs/AboutFacility";
import AboutusOurManagement from "./pages/AboutUs/AboutusOurManagement";
import AboutOrthopaedic from "./pages/AboutUs/AboutOrthopaedic";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import OurGalary from "./pages/OurGalary/OurGalary";
import LogosGalary from "./pages/OurGalary/LogosGalary";
import OurDoctors from "./pages/OurDoctors/OurDoctors";
import Deparments from "./pages/Deparments/Deparments";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

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
        <Route
          path="/aboutusourmanagement"
          element={<AboutusOurManagement />}
        />
        <Route path="/aboutorthopaedic" element={<AboutOrthopaedic />} />
        <Route path="/successstories" element={<SuccessStories />} />
        <Route path="/ourgalary" element={<OurGalary />} />
        <Route path="/logosgalary" element={<LogosGalary />} />
        <Route path="/ourdoctors" element={<OurDoctors />} />
        <Route path="/deparments" element={<Deparments />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
