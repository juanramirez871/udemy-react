import NavBar from "./shared/components/NavBar";
import Home from "./modules/home/page/index";
import PlayList from "./modules/playList/page/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./shared/components/footer";
import Login from "./shared/pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";


function App() {
  
  const [isAuth, setIsAuth] = useState(document.cookie == "auth=true");
  const shieldRoute = (Component) => isAuth ? Component : <Navigate to="/login" />

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" element={shieldRoute(<Home />)} />
            <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login setIsAuth={setIsAuth} />} />
            <Route path="/video/:id" element={shieldRoute(<PlayList />)} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
