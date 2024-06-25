import React from "react";

function ProjectCard({ src, link, head, summary }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${head} logo`} />
      <h3>{head}</h3>
      <p>{summary}</p>
    </a>
  );
}

export default ProjectCard;
