import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Courses from "./Pages/Courses";
import MyCourses from "./Pages/MyCourses";
import CourseInfo from "./components/Courses/CourseInfo";

function RouteMap() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseInfo />} />
      <Route path="/my-courses" element={<MyCourses />} />
    </Routes>
  );
}

export default RouteMap;
