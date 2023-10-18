import { Routes, Route } from "react-router-dom";
import MainePage from "./Pages/MainePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainePage/>} />
    </Routes>
  );
}

export default App;
