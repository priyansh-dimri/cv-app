import "./cv.css";

/* eslint-disable react/prop-types */
function CV({ formData }) {
  return (
    <div className="main">
      <div id="cv-full-name">{formData.fullName}</div>

      <div className="two-element-container">
        <div id="cv-email">{formData.email}</div>
        <div id="cv-phone">{formData.phone}</div>
      </div>

      <div className="container-title">Education</div>
      {formData.education.map((data) => (
        <div className="education-container" key={data.institution}>
          <div className="two-element-container">
            <div className="education-institution">{data.institution}</div>
            <div className="education-date">{data.eduDate}</div>
          </div>
          <div className="education-score italicize">{data.score}</div>
        </div>
      ))}
      <div className="line"></div>

      <div className="container-title">Experience</div>
      {formData.experience.map((data) => (
        <div className="experience-container" key={data.company}>
          <div className="two-element-container">
            <div className="education-company">{data.company}</div>
            <div className="education-date">{data.expDate}</div>
          </div>
          <div className="education-role italicize">{data.role}</div>
          <div className="education-about small-font">{data.about}</div>
        </div>
      ))}
      <div className="line"></div>

      <div className="container-title">Skills</div>
      {formData.skills.map((data, idx) => (
        <div className="skills-container" key={idx}>
          {data}
        </div>
      ))}

      <div className="line"></div>

      <div className="container-title">Projects</div>
      {formData.projects.map((data) => (
        <div className="projects-container" key={data.title}>
          <div className="projects-title">{data.title}</div>
          <div className="projects-skills italicize">{data.skills}</div>
          <div className="projects-about">{data.about}</div>
        </div>
      ))}
    </div>
  );
}

export default CV;
