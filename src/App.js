import { Routes, Route, Link } from "react-router-dom";
import { APODScreen } from "./pages/ApodScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<APODScreen />} />
    </Routes>
  );
}
