import React from "react";
import styled from "styled-components";
const Article = styled.article`
  display: grid;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  
  gap: 0px;
  height: 100%;
` 
const ImgFeed = styled.img`
  grid-column:1/3;
  width:100%;
  height:200px;
`;
const Avatar=styled.img`
  grid-column:1/2;
  width:150px;
  height:150px;
`;
const ProfileInfo=styled.div`

  grid-column:2/3;
`
const Post=styled.article`
  grid-column:1/3;
`
export default function Content() {
  return (
    <Article className="article_profile_content">
      <ImgFeed src="https://images.pexels.com/photos/12676278/pexels-photo-12676278.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <Avatar src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=612x612&w=0&h=Ov2YWXw93vRJNKFtkoFjnVzjy_22VcLLXZIcAO25As4=" className="avatar"></Avatar>
      <ProfileInfo>Info</ProfileInfo>
      <Post>Post</Post>
    </Article>
  );
}
