import styled from "styled-components";
import StyledPost from "./StyledPost";
const Ul = styled.ul`
   background-color: #282c34;
   display grid;
  //  grid-template-columns 1fr 1fr 1fr 1fr;
   border-radius:25px;
   box-shadow -0 2px 1px rgba(0, 0, 0, 0.1);
`;

export default function StyledPostContainer() {
  return (
    <Ul className="posts">
      <StyledPost/>
      <StyledPost/>
      <StyledPost/>
      <StyledPost/>
    </Ul>
  );
}
