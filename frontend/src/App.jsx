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
        _id: "65284749962a84fb80b8b876",
        course: "nodejs",
      },
      {
        title: "SQL de cero: Tu guía práctica con PostgreSQL",
        description: "Aprende sobre bases de datos relacionales partiendo desde cero",
        img: "https://cursin.net/wp-content/uploads/2023/07/sql-analisis-negocio-cursin.jpg",
        _id: "6528478b962a84fb80b8b95e",
        course: "sql",
      },
      {
        title: "React PRO: Lleva tus bases al siguiente nivel",
        description: "Mejorar tus habilidades existentes de React.",
        img: "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
        _id: "652847cd962a84fb80b8bac8",
        course: "react",
      },
      {
        title: "Docker: Guía práctica de uso para desarrolladores",
        description: "Aquí aprenderás Docker y para qué te puede servir, aprende a utilizar y crear imágenes, controlar el versionamiento y construcción automática de las mismas..",
        img: "https://appmaster.io/api/_files/QsSz55Kp9QZnZyprJbMRcX/download/",
        _id: "65284845962a84fb80b8bf48",
        course: "docker",
      },
      {
        title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
        description: "Al finalizar el curso, sabrás Git, GitHub, Markdown, uso de repositorios, Wikis, Issues y mucho más.",
        img: "https://aprenderbigdata.com/wp-content/uploads/1235212_3204_2-git.jpg",
        _id: "6528481c962a84fb80b8be66",
        course: "git",
      },
      {
        title: "Principios SOLID y Clean Code",
        description: "Fundamentos para diseño y desarrollo de aplicaciones",
        img: "https://profile.es/wp-content/media/principios-solid-desarrollo-software-1-1024x478.jpg",
        _id: "65284981962a84fb80b8c1c6",
        course: "solid",
      },
      {
        title: "Desarrollo JAVA + Spring Boot",
        description: "Java Spring Boot is an open-source tool that makes it easier to use Java-based frameworks to create microservices and web apps.",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--LeqrCOME--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91ovedmu4grqhjh434rq.png",
        _id: "65284a36962a84fb80b8c24e",
        course: "javaspringboot",
      },
      {
        title: "JavaScript Moderno: Guía para dominar el lenguaje",
        description: "Empezando de cero conocimiento en JavaScript, te llevaremos a un nivel avanzado y competitivo.",
        img: "https://programacionytecnologia.com/images_articles/JavaScript.jpeg",
        _id: "65284892962a84fb80b8c052",
        course: "javascript",
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

  // useEffect(() => { NO DESCOMENTAR
  //   (async () => {
  //     let config = {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //     const response = await (await fetch(`http://192.168.110.14:5010/cursos/v2?course=javaspringboot`, config)).json();
  //     response.secciones.forEach(async(el, i) => {

  //       await el.videos.forEach(async(ell, ii) => {

  //         const a = {
  //           module: i + 1, nameCourse: "javaspringboot", modulName: el.sectionName, title: ell.Titulo, comments: [], disLikesPeople: [], likesPeople: [], seenPeople: [], lastWached: [],
  //         urlVideo: `http://192.168.110.14:5010/cursos/play?course=javaspringboot&seccion=${i + 1}&video=${ell.video}`, duracion: ell.duracion, links: ell?.links
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
