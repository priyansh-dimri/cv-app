import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: [],
    experience: [],
    skills: [],
    projects: [],
  });

  return (
    <div className="container">
      <Sidebar formData={formData} setFormData={setFormData} />
      <div className="main"></div>
    </div>
  );
}

export default App;
