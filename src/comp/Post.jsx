import styled from "styled-components";
const Article = styled.article`
   background-color: #282c34;
   grid-template-columns 1fr 1fr 1fr 1fr;
   border-radius:25px;
`;
const Post = styled.article`
  padding: 5px;
  grid-column: 1/5;
  color: white;

  
`;
export default function StyledPost() {
  return (
    <Article className="post">
      <Post>Hi i am post   </Post>
    </Article>
  );
}
