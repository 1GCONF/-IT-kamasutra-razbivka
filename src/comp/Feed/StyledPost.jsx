import styled from "styled-components";
const Post = styled.li`
   width 90%;  
   margin: 0 auto;
  justify-self center;
  color: white;
  display grid;
  grid-template-columns .1fr 1fr;
  border-radius:25px;
  outline 1px solid;
`;
const ImgAvatar = styled.img`
    margin: 15px 0;
   width 50px;
   border-radius 50%;
   cursor pointer;
   justify-self:center;
   align-self:start;
`;
const Textbox = styled.div`
  margin-top 15px;
  display grid;
  grid-template-rows:1fr .1fr;
  align-content space-between;

  // gap: 30px;
`;
const Text = styled.p`
   color white;
   align-self start;
   margin-bottom 6px;
`;

const Likesbox = styled.ul``;
const LikesItem = styled.li`
  display:grid;
  grid-template-columns 30px 20px;
`;
const LikesImg = styled.img`
  width 20px;
  height 20px;
  align-self:end;
  margin-bottom:4px;
  cursor pointer;
  &:hover{
    opacity .3;
  }
`;
const LikesCount = styled.p`
  color:white;
  justify-self start;
  align-self center;
  font-size .8rem;
  margin-bottom:4px;
`;
export default function StyledPost(props) {
  return (
    <Post>
      <ImgAvatar
        src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=612x612&w=0&h=Ov2YWXw93vRJNKFtkoFjnVzjy_22VcLLXZIcAO25As4="
        alt="avatar"
      />
      <Textbox>
        <Text>{props.message}</Text>
        <Likesbox>
          <LikesItem>
            <LikesImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TMW1Pb_xYYMFxYeP0n07diucIvwD6Rm2Ww&usqp=CAU" />
            <LikesCount>{props.likesCount}</LikesCount>
          </LikesItem>
        </Likesbox>
      </Textbox>
    </Post>
  );
}
