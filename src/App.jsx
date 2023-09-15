import NavBar from "./shared/components/NavBar";
import Index from "./modules/home/page/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./shared/components/footer";

function App() {

  return (
    <>
      <NavBar />
      <div style={{ margin: "20px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App
