import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.page";
import NotFound from "./pages/NotFound.page";
import About from "./pages/About.page";
import Logement from "./pages/Logement.page";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import logementsData from './data/logements.json';
import MenuData from './data/about.json'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home cardsData={logementsData}/>}/>
        <Route path="/about" element={<About MenuData={MenuData}/>}/>
        <Route path="/logement">
          <Route path=":id" element={<Logement logementsData={logementsData}/>}/>
        </Route>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to={"/404"}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;