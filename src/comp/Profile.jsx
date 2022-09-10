import React from "react";
import styled from "styled-components";
const Article = styled.article` 
  width 100%;
  height: 100%;
  display: grid;

  grid-template-rows:1fr .5fr;
  grid-template-columns repeat(auto-fill,minmax(200px,1fr));
  
  gap: 15px;

  background-color: #282c34;
  border-radius:25px;
  box-shadow -0 2px 1px rgba(0, 0, 0, 0.1);
  width:91%;
  justify-self center;
  padding:3ex;
`;
const ImgFeed = styled.img`
  // grid-column: 1/5;
  width: 100%;
  max-height: 300px;
  border-radius 25px;
`;
const Avatar = styled.img`
  // grid-column: 1/2;

  width: 150px;
  height: 150px;
  align-self: start;
  justify-self: center;
  border: 2px solid white;
  border-radius: 50%;
  transform: translateY(-50%);
`;
const ProfileInfo = styled.div`
  // grid-column: 2/4;
  align-self: start;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  color: white;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.173);
  display: grid;
  align-content: space-between;
`;

const A = styled.a`
  color: white;
`;
export default function Content() {
  return (
    <Article className="article_profile_content">
      <ImgFeed src="https://images.pexels.com/photos/12676278/pexels-photo-12676278.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <Avatar
        src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=612x612&w=0&h=Ov2YWXw93vRJNKFtkoFjnVzjy_22VcLLXZIcAO25As4="
        className="avatar"
      ></Avatar>
      <ProfileInfo>
        <h2>Dmitriy K</h2>
        <ul>
          <li>Date of Birth: 2/1/1991</li>
          <li>City:Minsk</li>
          <li>Education: BSU 11</li>
          <li>
            Website link:{" "}
            <A href="https://www.example.com">https://www.example.com</A>{" "}
          </li>
        </ul>
      </ProfileInfo>
    </Article>
  );
}
