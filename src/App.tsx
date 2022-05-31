import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages";
import { Main } from "./components";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
