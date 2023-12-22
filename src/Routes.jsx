import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ColorTextStyles = React.lazy(() => import("pages/ColorTextStyles"));
const FormElements = React.lazy(() => import("pages/FormElements"));
const NotificationLastestActivity = React.lazy(
  () => import("pages/NotificationLastestActivity"),
);
const Chat = React.lazy(() => import("pages/Chat"));
const AddNewStudent = React.lazy(() => import("pages/AddNewStudent"));
const AddNewTeacher = React.lazy(() => import("pages/AddNewTeacher"));
const UserDashboard = React.lazy(() => import("pages/UserDashboard"));
const FoodDetails = React.lazy(() => import("pages/FoodDetails"));
const StudentDetails = React.lazy(() => import("pages/StudentDetails"));
const TeacherDetails = React.lazy(() => import("pages/TeacherDetails"));
const Food = React.lazy(() => import("pages/Food"));
const Finance = React.lazy(() => import("pages/Finance"));
const Events = React.lazy(() => import("pages/Events"));
const Teachers = React.lazy(() => import("pages/Teachers"));
const Students = React.lazy(() => import("pages/Students"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/food" element={<Food />} />
          <Route path="/teacherdetails" element={<TeacherDetails />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
          <Route path="/fooddetails" element={<FoodDetails />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/addnewteacher" element={<AddNewTeacher />} />
          <Route path="/addnewstudent" element={<AddNewStudent />} />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/notificationlastestactivity"
            element={<NotificationLastestActivity />}
          />
          <Route path="/formelements" element={<FormElements />} />
          <Route path="/colortextstyles" element={<ColorTextStyles />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
