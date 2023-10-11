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
        img: "https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png",
        _id: "6513389b366f4d815a163ebe",
        course: "nodejs",
      },
      {
        title: "SQL de cero: Tu guía práctica con PostgreSQL",
        description: "Aprende sobre bases de datos relacionales partiendo desde cero",
        img: "https://cursin.net/wp-content/uploads/2023/07/sql-analisis-negocio-cursin.jpg",
        _id: "651337f1366f4d815a163d13",
        course: "sql",
      },
      {
        title: "React PRO: Lleva tus bases al siguiente nivel",
        description: "Mejorar tus habilidades existentes de React.",
        img: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png",
        _id: "6513394f751697f0ca83212a",
        course: "react",
      },
      {
        title: "Docker: Guía práctica de uso para desarrolladores",
        description: "Aquí aprenderás Docker y para qué te puede servir, aprende a utilizar y crear imágenes, controlar el versionamiento y construcción automática de las mismas..",
        img: "https://appmaster.io/api/_files/QsSz55Kp9QZnZyprJbMRcX/download/",
        _id: "6513383f366f4d815a163dc8",
        course: "docker",
      },
      {
        title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
        description: "Al finalizar el curso, sabrás Git, GitHub, Markdown, uso de repositorios, Wikis, Issues y mucho más.",
        img: "https://aprenderbigdata.com/wp-content/uploads/1235212_3204_2-git.jpg",
        _id: "65133889366f4d815a163e4d",
        course: "git",
      },
    ]
  );

  const [isAuth, setIsAuth] = useState(document.cookie == "auth=true");
  const [dataUser, setDataUser] = useState(false);
  const [avatar, setAvatar] = useState("");
  const shieldRoute = (Component) => isAuth ? Component : <Navigate to="/login" />
  useEffect(() => {
    (async () => {
      if (dataUser == false && isAuth) {
        const data = await request({ endpoint: "user/profile" });
        if (data?.data.avatar) setAvatar(`https://cdn.discordapp.com/avatars/${data?.data.id}/${data?.data.avatar}.png`);
        else setAvatar(perfilDefault);
        setDataUser(data);
      }
    })()

  }, [isAuth]);

  // useEffect(() => {
  //   (async () => {
  //     let config = {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //     const response = await (await fetch(`http://192.168.110.14:5010/cursos/v2?course=sql`, config)).json();
  //     response.secciones.forEach(async(el, i) => {

  //       await el.videos.forEach(async(ell, ii) => {

  //         const a = {
  //           module: i + 1, nameCourse: "sql", modulName: el.sectionName, title: ell.Titulo, comments: [], disLikesPeople: [], likesPeople: [], seenPeople: [], lastWached: [],
  //         urlVideo: `http://192.168.110.14:5010/cursos/play?course=sql&seccion=${i + 1}&video=${ell.video}`, duracion: ell.duracion, links: ell?.links
  //       }
  //       await request({ endpoint: "video/aaa", data: a, method: "PUT" });
  //     })
  //   })
  //   })();

  // }, []);


  return (
    <>
      <BrowserRouter>
        <NavBar avatar={avatar} setIsAuth={setIsAuth} setDataUser={setDataUser} setDataVideos={setDataVideos} dataVideos={dataVideos} />
        <div style={{ margin: "20px" }}>
          <Routes>
            <Route path="/" element={shieldRoute(<Home dataUser={dataUser?.data} dataVideos={dataVideos} />)} />
            <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login setIsAuth={setIsAuth} />} />
            <Route path="/video/:id/:moduleId/:course" element={shieldRoute(<PlayList dataUser={dataUser?.data} avatar={avatar} />)} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer isAuth={isAuth} />
    </>
  )
}

export default App
