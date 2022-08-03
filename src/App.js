import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { Page404 } from "./component/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
