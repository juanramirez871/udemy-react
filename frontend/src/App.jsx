import NavBar from "./shared/components/NavBar";
import Home from "./modules/home/page/index";
import PlayList from "./modules/playList/page/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./shared/components/footer";
import Login from "./shared/pages/Login";
import { useEffect, useState } from "react";
import request from "./shared/helpers/request";


function App() {

  const [isAuth, setIsAuth] = useState(document.cookie == "auth=true");
  const [dataUser, setDataUser] = useState(false);
  const shieldRoute = (Component) => isAuth ? Component : <Navigate to="/login" />
  useEffect(() => {

    (async () => {
      if (dataUser == false) {
        const data = await request({ endpoint: "user/profile" })
        setDataUser(data);
      }
    })()

  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar avatar={dataUser?.data?.avatar} setIsAuth={setIsAuth} />
        <div style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" dataUser={dataUser?.data} element={shieldRoute(<Home />)} />
            <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login setIsAuth={setIsAuth} />} />
            <Route path="/video/:id" element={shieldRoute(<PlayList dataUser={dataUser?.data} />)} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
