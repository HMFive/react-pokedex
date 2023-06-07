import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import {Route, Router, Routes} from "react-router-dom";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
