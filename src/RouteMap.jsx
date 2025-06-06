import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Courses from "./Pages/Courses";

function RouteMap() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default RouteMap;
