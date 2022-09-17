import styled from "styled-components";
import StyledPost from "./StyledPost";
const Ul = styled.ul`
    width:100%;
    height:100%;
   display flex;
   flex-direction:column; 
   gap:25px;
   border-radius:25px;
   background-color: #282c34;
   border-radius:25px;
   box-shadow -0 2px 1px rgba(0, 0, 0, 0.1);
   justify-self center;
   align-content:space-evenly;
   padding:25px 0;
`;
const PostHeading = styled.h2`
  color: white;
  text-align: center;
`;
const InputSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex-grow: 1;
    flex-shrink: 1;
  }
  gap: 15px;
  width: 90%;
  margin: 0 auto;
`;
const TextArea = styled.textarea`
  width: 75%;
  max-height: 100px;
  margin: 0 auto;
  border-radius: 70px;
  padding: 3%;
  font-size: 21px;
  border: none;
  outline: none;
  resize: none;
`;
const Button = styled.button`
  width: 15%;
  border-radius: 25px;
  height:auto;
  padding:1rem 6ex;
  text-align-center;
  background: white;
  cursor:pointer;
  &:hover{
    transition: .3s ease;
    opacity: .3;
  }
`;
const DATA_POSTS = [
  { name: "Igor", age: 31, message: "Its my first post", likesCount: 17 },
  { name: "Dima", age: 25, message: "Hi WASSUP", likesCount: 3 },
  { name: "Sveta", age: 18, message: "Happy bday!", likesCount: 7 },
  { name: "Lena", age: 33, message: "Hey there congrats", likesCount: 0 },
];
const postElements = DATA_POSTS.map((p,index)=> <StyledPost key={index} message={p.message} likesCount={p.likesCount}/>)
export default function Posts() {
  return (
    <Ul className="posts">
      <PostHeading>Feed</PostHeading>

      <InputSection>
        <TextArea />
        <Button>Add Post</Button>
      </InputSection>

      {postElements}

      {/* <StyledPost
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
      /> */}
    </Ul>
  );
}
