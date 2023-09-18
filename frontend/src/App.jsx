import NavBar from "./shared/components/NavBar";
import Home from "./modules/home/page/index";
import PlayList from "./modules/playList/page/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./shared/components/footer";
import Login from "./shared/pages/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/video/:id" element={<PlayList />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
