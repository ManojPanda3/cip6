import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lessons } from "./pages/Lessons";
import { WeekPage } from "./pages/WeekPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lessons />} />
        <Route path="/week/:num" element={<WeekPage />} />
        <Route path="*" element={<Lessons />} />
      </Routes>
    </BrowserRouter>
  );
}
