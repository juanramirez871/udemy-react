import NavBar from "./shared/components/NavBar";
import Home from "./modules/home/page/index";
import PlayList from "./modules/playList/page/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./shared/components/footer";
import Login from "./shared/pages/Login";
import { useEffect, useState } from "react";
import request from "./shared/helpers/request";
import perfilDefault from "./assets/img/defaultPerfil.jpg";


function App() {

  const [isAuth, setIsAuth] = useState(document.cookie == "auth=true");
  const [dataUser, setDataUser] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const shieldRoute = (Component) => isAuth ? Component : <Navigate to="/login" />
  useEffect(() => {
    (async () => {
      if (dataUser == false && isAuth) {
        const data = await request({ endpoint: "user/profile" });
        if(data?.data.avatar) setAvatar(`https://cdn.discordapp.com/avatars/${data?.data.id}/${data?.data.avatar}.png`);
        else setAvatar(perfilDefault);
        setDataUser(data);
      }
    })()

  }, [isAuth]);

  return (
    <>
      <BrowserRouter>
        <NavBar avatar={avatar} setIsAuth={setIsAuth} setDataUser={setDataUser} />
        <div style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" dataUser={dataUser?.data} element={shieldRoute(<Home />)} />
            <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login setIsAuth={setIsAuth} />} />
            <Route path="/video/:id/:moduleId" element={shieldRoute(<PlayList dataUser={dataUser?.data} avatar={avatar} />)} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
