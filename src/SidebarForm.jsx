/* eslint-disable react/prop-types */
function FormElement({ elementName, elementKey, formData, setFormData }) {
  return (
    <>
      <label htmlFor={elementName}>{elementName}</label>
      <input
        type="text"
        id={elementName}
        name={elementName}
        value={formData[elementKey] ?? ""}
        onChange={(e) => {
          let updatedValue = e.target.value;
          setFormData((formData) => ({
            ...formData,
            [elementKey]: updatedValue,
          }));
        }}
      />
    </>
  );
}

function SidebarForm({ formData, setFormData }) {
  return (
    <>
      <FormElement
        elementName="Full Name"
        value={formData.fullName}
        setFormData={setFormData}
      />
      <FormElement
        elementName="Email"
        value={formData.email}
        setFormData={setFormData}
      />
      <FormElement
        elementName="Phone Number"
        value={formData.phone}
        setFormData={setFormData}
      />
    </>
  );
}

export default SidebarForm;
