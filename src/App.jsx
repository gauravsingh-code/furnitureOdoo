
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Login from "./components/Login"




function App() {
  return (
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
