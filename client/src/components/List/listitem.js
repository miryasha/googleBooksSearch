import React from "react";
import './ListItem.css'

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
