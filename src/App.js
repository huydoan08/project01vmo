
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DieuhuongURL from "./router/DieuhuongURL";
import Calculator from "./components/calculator/Calculator"

function App() {
  return (
    <Router>
      <div className="bg-indigo-200">
        <Navbar/>
        <DieuhuongURL/>
      </div>
    </Router>
  );
}

export default App;
