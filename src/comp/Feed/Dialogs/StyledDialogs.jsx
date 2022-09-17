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
const DialogItem = (props) => {
  return (
    <li className="dialog-item">
      <NavLink id={props.id} name={props.name} to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </li>
  );
};
const DialogMessages = styled.ul``;
const DialogMessage = styled.li`
  color: white;
`;
const PERSONS = [
  { id: 1, name: "Dymich", message: "hi, my first post" },
  { id: 2, name: "Sveta", message: "Happy bday!" },
  { id: 3, name: "Lena", message: "Hey u look good here" },
];
const MESSAGES = [
  { id: 1, messageContent: "hi, my first post" },
  { id: 2, messageContent: "Happy bday!" },
  { id: 3, messageContent: "Hey u look good here" },
];
export default function Dialogs() {
  return (
    <StyledDialogs>
      <DialogItemHeading>Dialogs</DialogItemHeading>

      <DialogItems>
        {PERSONS.map((person) => {
          return (
            <DialogItem
              key={person.id}
              className="dialog-item"
              id={person.id}
              name={person.name}
            />
          );
        })}
      </DialogItems>

      <DialogMessages>
        {MESSAGES.map((message) => {
          return (
            <DialogMessage key={message.id} className="dialog-message">
              {message.messageContent}
            </DialogMessage>
          );
        })}
      </DialogMessages>

      {/* <DialogMessages>
        <DialogMessage messageContent="hi, my first post" />
        <DialogMessage messageContent="Happy bday!" />
        <DialogMessage messageContent="Hey u look good here" />
      </DialogMessages> */}
    </StyledDialogs>
  );
}
