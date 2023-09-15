import NavBar from "./shared/components/NavBar";
import Index from "./modules/home/page/index";

function App() {

  return (
    <>
      <NavBar />
      <div style={{ margin: "20px" }}>
        <Index />
      </div>
    </>
  )
}

export default App
