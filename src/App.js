import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./pages/Details";
import Pokedex from "./components/pokemon/Pokedex";

function App() {
  return (
   <div className="bg-rose-200 dark:bg-zinc-700">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
