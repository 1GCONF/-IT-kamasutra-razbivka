import styled from "styled-components";
import StyledPost from "./StyledPost";
const Ul = styled.ul`
  width:100%;
   display grid; 
   border-radius:25px;
   background-color: #282c34;
   border-radius:25px;
   box-shadow -0 2px 1px rgba(0, 0, 0, 0.1);
   justify-self center;
`;
const PostHeading = styled.h2`
  text-align:center;
`;
const TextArea=styled.textarea`
  border: 2px solid magenta;
`;
export default function Posts() {
  return (
    <Ul className="posts">
      <PostHeading>My posts</PostHeading>
      <TextArea/>
      <StyledPost
        name="Dima"
        age="32"
        message="Hi, how are u?"
        likesCount="12"
      />
      <StyledPost
        name="Igor"
        age="31"
        message="Its my first post"
        likesCount="7"
      />
      <StyledPost
        name="Lena"
        age="18"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quidem saepe facere, nihil hic sit minima soluta numquam eligendi animi nisi itaque alias quasi culpa?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quidem saepe facere, nihil hic sit minima soluta numquam eligendi animi nisi itaque alias "
        likesCount="28"
      />
      <StyledPost
        name="Anita"
        age="32"
        message="Happy Birthday!"
        likesCount="23"
      />
    </Ul>
  );
}
