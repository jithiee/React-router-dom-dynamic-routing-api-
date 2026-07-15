import Navbar from "./components/Navbar"
import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ApiProducts from "./pages/ApiProducts"

function App() {
 
  return (
    <>
    <Navbar/>

    <Routes>
      
        <Route  path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/apiproducts" element={<ApiProducts/>}/>

    </Routes>

    </>
  )
}

export default App
