import React from "react";
import "./style.css";

export function Input(props) {
  return (
    <div className="form-group text-left">
      <label className="text-left" htmlFor={props.id}>{props.label}</label>
      <input className="form-control" value={props.value} onChange={props.onChange} id={props.id} placeholder={props.placeholder}/>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-outline-dark">
      {props.children}
    </button>
  );
}
