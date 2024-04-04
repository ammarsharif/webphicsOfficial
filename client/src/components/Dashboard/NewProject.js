import React from "react";
import Uploadproject from "./UploadProject";

function NewProject(props) {
  const saveProject = (data) => {
    const formData = {
      ...data,
      id: Math.random().toString,
    };
    props.onShowProject(formData);
  };
  return (
    <div className="newProject">
      <Uploadproject onSaveProject={saveProject} />
    </div>
  );
}

export default NewProject;
