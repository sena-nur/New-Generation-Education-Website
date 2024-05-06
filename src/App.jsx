import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import InstructorDashboard from "./pages/InstructorDashboard";
import InstructorSignup from "./pages/InstructorSignup";
import Team from "./pages/Team";
import CourseDetail from "./pages/CourseDetail";
import GetMentorship from "./pages/Mentorship/GetMentorship";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
