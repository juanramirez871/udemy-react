import NavBar from "./shared/components/NavBar";
import Home from "./modules/home/page/index";
import PlayList from "./modules/playList/page/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./shared/components/footer";

function App() {

  return (
    <>
      <NavBar />
      <div style={{ margin: "20px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<PlayList />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App
