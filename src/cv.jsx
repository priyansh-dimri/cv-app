/* eslint-disable react/prop-types */
function CV({ formData }) {
  return (
    <div className="main">
      <div id="cv-full-name">{formData.fullName}</div>
      <div id="cv-email">{formData.email}</div>
      <div id="cv-phone">{formData.phone}</div>

      <div id="container-title">Education</div>
      {formData.education.map((data) => (
        <div className="education-container" key={data.institution}>
          <div className="education-institution">{data.institution}</div>
          <div className="education-date">{data.eduDate}</div>
          <div className="education-score">{data.score}</div>
        </div>
      ))}

      <div id="container-title">Experience</div>
      {formData.experience.map((data) => (
        <div className="experience-container" key={data.company}>
          <div className="education-company">{data.company}</div>
          <div className="education-role">{data.role}</div>
          <div className="education-date">{data.expDate}</div>
          <div className="education-about">{data.about}</div>
        </div>
      ))}

      <div id="container-title">Experience</div>
      {formData.skills.map((data, idx) => (
        <div className="skills-container" key={idx}>
          {data}
        </div>
      ))}

      <div id="container-title">Projects</div>
      {formData.projects.map((data) => (
        <div className="projects-container" key={data.title}>
          <div className="projects-title">{data.title}</div>
          <div className="projects-skills">{data.skills}</div>
          <div className="projects-about">{data.about}</div>
        </div>
      ))}
    </div>
  );
}

export default CV;
