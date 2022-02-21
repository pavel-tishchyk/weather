import React from "react";
import './styles.scss';

function Card({className, title, children}) {
  return (
      <div className={`card  animate__animated ${className ? className : ""}`}>
        <h3 className="card-title">{title}</h3>
        {children}
      </div>
  );
}

export default Card;
