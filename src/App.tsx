import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Images, Sheets } from "./pages";
import { Main } from "./components";

function NotFound() {
  return (
    <div className="container mx-auto py-10 flex flex-col">
      <h2 className="text-3xl font-bold text-emerald-600">
        404 - Page not found
      </h2>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
