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

  const [dataVideos, setDataVideos] = useState(
    [
        {
            title: "Node.js: De cero a experto",
            description: "Aprende Node.js desde los fundamentos, despliegues, construcción de imágenes, testing",
            img: "https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png"
        },
        {
            title: "SQL de cero: Tu guía práctica con PostgreSQL",
            description: "Aprende sobre bases de datos relacionales partiendo desde cero",
            img: "https://cursin.net/wp-content/uploads/2023/07/sql-analisis-negocio-cursin.jpg"
        },
        {
            title: "React PRO: Lleva tus bases al siguiente nivel",
            description: "Mejorar tus habilidades existentes de React.",
            img: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
        },
        {
          title: "Docker: Guía práctica de uso para desarrolladores",
          description: "Aquí aprenderás Docker y para qué te puede servir, aprende a utilizar y crear imágenes, controlar el versionamiento y construcción automática de las mismas..",
          img: "https://appmaster.io/api/_files/QsSz55Kp9QZnZyprJbMRcX/download/"
      },
      {
        title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
        description: "Al finalizar el curso, sabrás Git, GitHub, Markdown, uso de repositorios, Wikis, Issues y mucho más.",
        img: "https://aprenderbigdata.com/wp-content/uploads/1235212_3204_2-git.jpg"
    },
    ]
);

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
        <NavBar avatar={avatar} setIsAuth={setIsAuth} setDataUser={setDataUser} setDataVideos={setDataVideos} dataVideos={dataVideos} />
        <div style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" dataUser={dataUser?.data} element={shieldRoute(<Home dataVideos={dataVideos} />)} />
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
