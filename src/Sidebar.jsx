/* eslint-disable react/prop-types */
import SidebarForm from "./SidebarForm";

function Sidebar({ formData, setFormData }) {
  return (
    <div className="sidebar">
      <div className="title">CV Application</div>
      <SidebarForm formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default Sidebar;
