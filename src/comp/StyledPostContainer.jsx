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
      <StyledPost name='Dima' age='32' message='Hi, how are u?' likesCount='12'/>
      <StyledPost name='Igor' age='31' message='Its my first post' likesCount='7'/>
      <StyledPost name='Lena' age='18'message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quidem saepe facere, nihil hic sit minima soluta numquam eligendi animi nisi itaque alias quasi culpa?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quidem saepe facere, nihil hic sit minima soluta numquam eligendi animi nisi itaque alias ' likesCount='28'/>
      <StyledPost name='Anita' age='32'message='Happy Birthday!' likesCount='23'/>
    </Ul>
  );
}
