import Footer from "./components/Footer"
// import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
// import WorkHistory from "./components/WorkHistory"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/> }/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
