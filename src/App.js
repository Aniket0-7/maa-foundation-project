
import "./App.css";


import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Events from './Components/Events/Events';
import Gallery from './Components/Gallery/Gallery';
import Blogs from './Components/Blog/Blogs';
import BlogOpenPage from './Components/Blog/BlogOpenPage';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
   <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogdata" element={<BlogOpenPage/>}>
            <Route path=":blogdataId" element={<BlogOpenPage/>} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
    <Footer />


    </>
  );
}

export default App;
