import "./App.css";
import NavScrollExample from "./NavScrollExample";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todaydeals from "./Todaysdeals";
import Cart from "./Cart";
import Buy from "./Buy";
import Featured from "./Featured";
function App() {
  return (
    <div className="app-container">
      <Router>
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todaysdeals" element={<Todaydeals />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
