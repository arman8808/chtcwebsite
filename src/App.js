import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import SubNav from "./components/Navbar/SubNav/SubNav";
import MainNav from "./components/Navbar/MainNav/MainNav";
import GoToTop from "./GoToTop";

function App() {
  return (
    <BrowserRouter>
      <GoToTop />
      <SubNav />
      <MainNav />
      <Routes>{/* <Route path="/" element={""} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
