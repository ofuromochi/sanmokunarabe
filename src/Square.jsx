import React from "react";

export default function square(props) {
  return (
    <button className="square-button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
