import styled from "styled-components";
import { NavLink } from "react-router-dom";
const StyledDialogs = styled.article`
  width:100%;
  background-color: #282c34;
  border-radius:25px;
  box-shadow -0 2px 1px rgba(0, 0, 0, 0.1);
  justify-self center;
  color:white;
  padding 3ex;
  &>h1{text-align: center;}
`;
const DialogItems = styled.ul``;
const DialogItem = (props) => {
  return (
    <div className="dialog-item">
      <NavLink id={props.id} name={props.name} to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};
export default function Dialogs() {
  return (
    <StyledDialogs>
      <h1>Dialogs</h1>
      <DialogItems>
        <DialogItem id="1" name="Dymich"/>
        <DialogItem id="2" name="Sveta" />
        <DialogItem id="3" name="Lena" />
      </DialogItems>
      <ul className="dialog-messages">
        <li className="dialog-message">Hi</li>
        <li className="dialog-message">Hi</li>
        <li className="dialog-message">Hi</li>
      </ul>
    </StyledDialogs>
  );
}
