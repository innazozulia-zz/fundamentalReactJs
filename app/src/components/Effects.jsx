import React from "react";

function Effects({ post }) {
  return (
    <div className="effect__wrapper">
      <div className="main__text">
        <h1 className="title">
          {props.title} {props.id}
        </h1>
        <p className="text">{props.text}</p>
      </div>
      <button className="btn">Delete text</button>
    </div>
  );
}

export default Effects;
