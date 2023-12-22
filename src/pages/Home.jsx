import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/teachers">Teachers</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/finance">Finance</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/teacherdetails">TeacherDetails</Link>
        </li>
        <li>
          <Link to="/studentdetails">StudentDetails</Link>
        </li>
        <li>
          <Link to="/fooddetails">FoodDetails</Link>
        </li>
        <li>
          <Link to="/userdashboard">UserDashboard</Link>
        </li>
        <li>
          <Link to="/addnewteacher">AddNewTeacher</Link>
        </li>
        <li>
          <Link to="/addnewstudent">AddNewStudent</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/notificationlastestactivity">
            NotificationLastestActivity
          </Link>
        </li>
        <li>
          <Link to="/formelements">FormElements</Link>
        </li>
        <li>
          <Link to="/colortextstyles">ColorTextStyles</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
