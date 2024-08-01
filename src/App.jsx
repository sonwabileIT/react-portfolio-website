import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
