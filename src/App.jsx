import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/pages/Layout"
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import NoPage from "../src/pages/NoPage";
import Manage from "./pages/Manage";
import Bookmark from "./pages/Bookmark";
import Insure from "./pages/Insure";
import Fylo from "./pages/Fylo";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="manage" element={<Manage />} />
          <Route path="bookmark" element={<Bookmark/> }/>
          <Route path="insure" element={<Insure />}/>
          <Route path="fylo" element={<Fylo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
