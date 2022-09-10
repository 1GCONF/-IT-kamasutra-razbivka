import styled from "styled-components"
const StyledDialogs = styled.article`

  background-color: #282c34;
  border-radius:25px;
  box-shadow -0 2px 1px rgba(0, 0, 0, 0.1);
  width:91%;
  justify-self center;
  color:white;
  padding 3ex;
`;
export default function Dialogs() {
  return (
    <StyledDialogs>Dialogs</StyledDialogs>
  )
}
