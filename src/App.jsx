import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    educationIdx: 0,
    experienceIdx: 0,
    skillsIdx: 0,
    projectsIdx: 0,
    education: [
      {
        institution: "",
        eduDate: "",
        score: "",
      },
    ],
    experience: [
      {
        company: "",
        role: "",
        expDate: "",
        about: "",
      },
    ],
    skills: [],
    projects: [
      {
        title: "",
        skills: "",
        about: "",
      },
    ],
  });

  return (
    <div className="container">
      <Sidebar formData={formData} setFormData={setFormData} />
      <div className="main"></div>
    </div>
  );
}

export default App;
