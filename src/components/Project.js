import React from 'react';

const Project = ({ title, description, imageUrl, link }) => {
  return (
    <article className="project">
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Learn more</a>
      </div>
    </article>
  );
};



export default Project;
