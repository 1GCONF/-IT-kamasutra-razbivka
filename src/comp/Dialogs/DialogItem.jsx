import styled from "styled-components"
import { NavLink } from "react-router-dom";
export default function Dialogs(props) {
  return (
    <NavLink to={"/dialogs/"+props.pathId}>{props.name} </NavLink>
  )
}
