import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>} />
    </Routes>
  );
}

export default App;
