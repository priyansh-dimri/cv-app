/* eslint-disable react/prop-types */
function FormElement({
  elementName,
  elementKey,
  formData,
  setFormData,
  idx,
  elementSubKey,
}) {
  return (
    <>
      <label className="form-label" htmlFor={elementName}>
        {elementName}
      </label>
      <input
        type="text"
        id={elementName}
        name={elementName}
        value={
          idx === "-1"
            ? formData[elementKey] ?? ""
            : elementSubKey
            ? formData[elementKey][idx][elementSubKey] ?? ""
            : formData[elementKey][idx] ?? ""
        }
        onChange={(e) => {
          let updatedValue = e.target.value;
          if (idx === "-1") {
            setFormData((formData) => ({
              ...formData,
              [elementKey]: updatedValue,
            }));
          } else if (!elementSubKey) {
            setFormData((formData) => ({
              ...formData,
              [elementKey]: formData[elementKey].map((item, i) =>
                i === idx ? updatedValue : item
              ),
            }));
          } else {
            setFormData((formData) => ({
              ...formData,
              [elementKey]: formData[elementKey].map((item, i) =>
                i === idx ? { ...item, [elementSubKey]: updatedValue } : item
              ),
            }));
          }
        }}
      />
    </>
  );
}

function SidebarForm({ formData, setFormData }) {
  return (
    <div className="sidebar-form">
      <FormElement
        elementName="Full Name"
        formData={formData}
        setFormData={setFormData}
        elementKey="fullName"
        idx="-1"
      />
      <FormElement
        elementName="Email"
        formData={formData}
        setFormData={setFormData}
        elementKey="email"
        idx="-1"
      />
      <FormElement
        elementName="Phone"
        formData={formData}
        setFormData={setFormData}
        elementKey="phone"
        idx="-1"
      />
      <div className="form-group-title">Education</div>
      <FormElement
        elementName="Institution"
        formData={formData}
        setFormData={setFormData}
        elementKey="education"
        idx={formData.educationIdx}
        elementSubKey="institution"
      />
      <FormElement
        elementName="Date"
        formData={formData}
        setFormData={setFormData}
        elementKey="education"
        idx={formData.educationIdx}
        elementSubKey="eduDate"
      />
      <FormElement
        elementName="Score"
        formData={formData}
        setFormData={setFormData}
        elementKey="education"
        idx={formData.educationIdx}
        elementSubKey="score"
      />
      <button
        className="sidebar-button"
        onClick={() => {
          let newEmptyEducation = {
            institution: "",
            eduDate: "",
            score: "",
          };

          setFormData((formData) => ({
            ...formData,
            education: [...formData.education, newEmptyEducation],
            educationIdx: formData.educationIdx + 1,
          }));
        }}
      >
        Add Another
      </button>

      <div className="form-group-title">Experience</div>
      <FormElement
        elementName="Company"
        formData={formData}
        setFormData={setFormData}
        elementKey="experience"
        idx={formData.experienceIdx}
        elementSubKey="company"
      />
      <FormElement
        elementName="Role"
        formData={formData}
        setFormData={setFormData}
        elementKey="experience"
        idx={formData.experienceIdx}
        elementSubKey="role"
      />
      <FormElement
        elementName="Date"
        formData={formData}
        setFormData={setFormData}
        elementKey="experience"
        idx={formData.experienceIdx}
        elementSubKey="expDate"
      />
      <FormElement
        elementName="About"
        formData={formData}
        setFormData={setFormData}
        elementKey="experience"
        idx={formData.experienceIdx}
        elementSubKey="about"
      />
      <button
        className="sidebar-button"
        onClick={() => {
          let newEmptyExperience = {
            company: "",
            role: "",
            expDate: "",
            about: "",
          };

          setFormData((formData) => ({
            ...formData,
            experience: [...formData.experience, newEmptyExperience],
            experienceIdx: formData.experienceIdx + 1,
          }));
        }}
      >
        Add Another
      </button>

      <div className="form-group-title">Skills</div>
      <FormElement
        elementName="Skill"
        formData={formData}
        setFormData={setFormData}
        elementKey="skills"
        idx={formData.skillsIdx}
      />
      <button
        className="sidebar-button"
        onClick={() => {
          let newEmptySkill = "";

          setFormData((formData) => ({
            ...formData,
            skills: [...formData.skills, newEmptySkill],
            skillsIdx: formData.skillsIdx + 1,
          }));
        }}
      >
        Add Another
      </button>

      <div className="form-group-title">Projects</div>
      <FormElement
        elementName="Title"
        formData={formData}
        setFormData={setFormData}
        elementKey="projects"
        idx={formData.projectsIdx}
        elementSubKey="title"
      />
      <FormElement
        elementName="Skills"
        formData={formData}
        setFormData={setFormData}
        elementKey="projects"
        idx={formData.projectsIdx}
        elementSubKey="skills"
      />
      <FormElement
        elementName="Describe"
        formData={formData}
        setFormData={setFormData}
        elementKey="projects"
        idx={formData.projectsIdx}
        elementSubKey="about"
      />
      <button
        className="sidebar-button"
        onClick={() => {
          let newEmptyProject = {
            title: "",
            skills: "",
            about: "",
          };

          setFormData((formData) => ({
            ...formData,
            projects: [...formData.projects, newEmptyProject],
            projectsIdx: formData.projectsIdx + 1,
          }));
        }}
      >
        Add Another
      </button>
    </div>
  );
}

export default SidebarForm;
