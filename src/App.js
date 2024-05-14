import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SubNav from "./components/Navbar/SubNav/SubNav";
import MainNav from "./components/Navbar/MainNav/MainNav";
import GoToTop from "./GoToTop";

import Footer from "./components/Footer/Footer";
import { Suspense, lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const AboutFacility = lazy(() => import("./pages/AboutUs/AboutFacility"));
const AboutusOurManagement = lazy(() =>
  import("./pages/AboutUs/AboutusOurManagement")
);
const AboutOrthopaedic = lazy(() => import("./pages/AboutUs/AboutOrthopaedic"));
const SuccessStories = lazy(() =>
  import("./pages/SuccessStories/SuccessStories")
);
const OurGalary = lazy(() => import("./pages/OurGalary/OurGalary"));
const LogosGalary = lazy(() => import("./pages/OurGalary/LogosGalary"));
const OurDoctors = lazy(() => import("./pages/OurDoctors/OurDoctors"));
const Deparments = lazy(() => import("./pages/Deparments/Deparments"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
function App() {
  return (
    <BrowserRouter>
      <GoToTop />
      <SubNav />
      <MainNav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/aboutfacility"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <AboutFacility />
            </Suspense>
          }
        />
        <Route
          path="/aboutusourmanagement"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <AboutusOurManagement />
            </Suspense>
          }
        />
        <Route
          path="/aboutorthopaedic"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <AboutOrthopaedic />
            </Suspense>
          }
        />
        <Route
          path="/successstories"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <SuccessStories />{" "}
            </Suspense>
          }
        />
        <Route
          path="/ourgalary"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <OurGalary />
            </Suspense>
          }
        />
        <Route
          path="/logosgalary"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <LogosGalary />
            </Suspense>
          }
        />
        <Route
          path="/ourdoctors"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <OurDoctors />
            </Suspense>
          }
        />
        <Route
          path="/deparments"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <Deparments />
            </Suspense>
          }
        />
        <Route
          path="/contactus"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <ContactUs />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
