import React from "react";

function ProjectItem(props) {

  return (
    <div className="project-item">
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <div className="technologies">
       {
       <span>{props.technologies}
          </span> 
       }
      
      </div>
    </div>
  );
}

export default ProjectItem;
