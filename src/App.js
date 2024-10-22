import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import Home1 from "./Component/Home1";


function App() {

  return (
    <div className="App">
      <Router>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
