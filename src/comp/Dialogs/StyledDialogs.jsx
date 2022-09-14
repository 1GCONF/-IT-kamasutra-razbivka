import styled from "styled-components";
const StyledDialogs = styled.article`
  width:100%;
  background-color: #282c34;
  border-radius:25px;
  box-shadow -0 2px 1px rgba(0, 0, 0, 0.1);
  justify-self center;
  color:white;
  padding 3ex;
`;
const DialogItems = styled.ul``;
export default function Dialogs() {
  return (
    <StyledDialogs>
      <DialogItems></DialogItems>
    </StyledDialogs>
  );
}
