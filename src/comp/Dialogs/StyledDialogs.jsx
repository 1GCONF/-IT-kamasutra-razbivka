import styled from "styled-components";
import DialogItem from "./DialogItem";
import {Routes, Route } from "react-router-dom";
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
export default function Dialogs() {
  return (
    <StyledDialogs>
      <h1>Dialogs</h1>
      <DialogItems>
      <DialogItem name="Dimitry" />
      <DialogItem name="Igor" />
      <DialogItem name="Sveta" />
      <DialogItem name="Lena" />
        <Routes>
          <Route path="/id" element={<DialogItem name="Dimitry" />} />
          <Route path="/id" element={<DialogItem name="Igor" />} />
          <Route path="/id" element={<DialogItem name="Sveta" />} />
          <Route path="/id" element={<DialogItem name="Lena" />} />
        </Routes>
      </DialogItems>
    </StyledDialogs>
  );
}
