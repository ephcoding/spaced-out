import { Routes, Route, Link } from "react-router-dom";
import { APODScreen, HomeScreen } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/apod" element={<APODScreen />} />
    </Routes>
  );
}
