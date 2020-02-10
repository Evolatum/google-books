import React from "react";
import "./style.css";
import { FormBtn } from "../Form";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return(
  <li className="media text-left" id={props.id}>
    {props.image?<img src={props.image} className="mr-3" alt="thumbnail"/>:<figure className="mr-3 notFound"/>}
    <div className="media-body">
      <FormBtn
        onClick={props.onClick}
      >
        {props.buttonText}
      </FormBtn>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <FormBtn>
          View
        </FormBtn>
      </a>
      <h4 className="mt-0 mb-1">{props.title}</h4>
      {props.subtitle?<h5>{props.subtitle}</h5>:""}
      <span className="authors">Written by: {props.authors?props.authors.join(", "):"Unknown"}</span>
      <p>{props.description}</p>
    </div>
  </li>);
}
