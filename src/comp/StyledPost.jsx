import styled from "styled-components";
const Post = styled.li`
   width 90%;  
   margin: 1rem 0;
  grid-column: 1/5;
  justify-self center;
  color: white;
  display grid;
  grid-template-columns .1fr 1fr;
  border-radius:25px;
`; 
const ImgAvatar = styled.img`
   width 50px;
   border-radius 50%;
   cursor pointer;
   justify-self:start;
   align-self:center;
`;
const Text = styled.p`
   color white;
   align-self center;
`;
export default function StyledPost() {
  return (
    <Post>
      <ImgAvatar
        src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=612x612&w=0&h=Ov2YWXw93vRJNKFtkoFjnVzjy_22VcLLXZIcAO25As4="
        alt="avatar"
      />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio repellendus minima accusamus nam reprehenderit deserunt vero saepe sed ut earum quis blanditiis quibusdam doloremque, voluptatem rerum a labore perspiciatis. Vitae libero unde vel doloremque corporis temporibus autem molestiae amet, saepe sit itaque mollitia sint atque reiciendis reprehenderit aspernatur? Ipsum!</Text>
    </Post>
  );
}
