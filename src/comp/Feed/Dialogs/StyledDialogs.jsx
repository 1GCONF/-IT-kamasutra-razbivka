import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import StyledPost from './../Profile/Posts/StyledPost';

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

/*                         1.                           */
const DialogItemHeading = styled.h2`
  color: white;
`;
const DialogItems = styled.ul`
  & > .dialog-item {
    border-radius: 25%;
    border: 1px solid;
    cursor: pointer;
    list-style-type: circle;
    list-style-position: outside;
    &:hover {
      opacity: 0.3;
    }
    & > a {
      text-decoration: none;
      color: white;
    }
  }
`;
const DIALOGS_DATA = [
  { id: 1, name: "Dymich" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Igor" },
];
const DialogItem = (props) => {
  return (
    <li className="dialog-item">
      <NavLink id={props.id} name={props.name} to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </li>
  );
};
const dialogsElements = DIALOGS_DATA.map((dialog) => {
  return (
    <DialogItem
      key={dialog.id}
      className="dialog-item"
      id={dialog.id}
      name={dialog.name}
    />
  );
});

/*                         2.                           */

const DialogMessages = styled.ul``;
const DATA_MESSAGES = [
  { id: 1, messageContent: "hi, my first post" },
  { id: 2, messageContent: "Happy bday!" },
  { id: 3, messageContent: "Hey u look good here" },
];
const DialogMessage = (props) => {
  return (
    <li className="dialog-message-item" message={props.message}>
      {props.message}
    </li>
  );
};
const messagesElements = DATA_MESSAGES.map((m) => (
  <DialogMessage key={m.id} message={m.messageContent} />
));
export default function Dialogs() {
  return (
    <StyledDialogs>
      <DialogItemHeading>Dialogs</DialogItemHeading>

      <DialogItems>{dialogsElements}</DialogItems>

      <DialogMessages>{messagesElements}</DialogMessages>
    </StyledDialogs>
  );
}
