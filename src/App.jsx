import Navbar from "./Components/NavBar";
import InicioPage from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { ProjectsPage } from "./pages/ProjectsPage"; 
import { ContactoPage } from "./pages/ContactoPage";
import {StudiesPage} from "./pages/StudiesPage"
import { ExperiencePage } from "./pages/ExperiencePage";




function App() {
  return (
    <>
      <Navbar />
      <div className="backdrop-blur-lg" id="page1">
        <InicioPage />
      </div>
      <div className="backdrop-blur-lg" id="page2">
        <PerfilPage />
      </div>
      <div className="backdrop-blur-lg" id="page3">
        <StudiesPage />
      </div>
      <div className="backdrop-blur-lg" id="page4">
        <ExperiencePage/>
      </div>
      <div className="backdrop-blur-lg" id="page5">
        <ProjectsPage />
      </div>
      <div>
        <ContactoPage />
      </div>
    </>
  );
}

export default App;
