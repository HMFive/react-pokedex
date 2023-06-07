import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./pages/Details";
import Pokedex from "./components/pokemon/Pokedex";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
