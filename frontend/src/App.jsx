import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import InstructorDashboard from "./pages/InstructorDashboard";
import InstructorSignup from "./pages/InstructorSignup";
import Team from "./pages/Team";
import CourseDetail from "./pages/CourseDetail";
import GetMentorship from "./pages/Mentorship/GetMentorship";
import Courses from "./pages/Courses";
import StudentDashboard from "./pages/StudentDashboard";
import Course from "./pages/Course";
import VideoScreen from "./pages/StudentVideoScreen";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/instructor-signup" element={<InstructorSignup />} />
          <Route
            path="/instructor-dashboard"
            element={<InstructorDashboard />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/coursedetail" element={<CourseDetail />} />
          <Route path="/getmentorship" element={<GetMentorship />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/course" element={<Course />} />
          <Route path="/videoscreen" element={<VideoScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
