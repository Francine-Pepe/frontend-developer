import React from "react";
import "./Envelope.scss";

function TextReveal(props: any) {
  const { title } = props;

  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h1>
            {title}<span></span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TextReveal;
