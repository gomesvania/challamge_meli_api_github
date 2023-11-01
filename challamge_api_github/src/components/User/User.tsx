import React from "react";

interface UserProps {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
  created_at: string;
}

const User: React.FC<UserProps> = (props) => {
  return (
    <div className="user-content">
      <img src={props.avatar_url} alt="Avatar" />
      <p>Login: {props.login}</p>
      <p>Location: {props.location}</p>
      <p>Followers: {props.followers}</p>
      <p>Following: {props.following}</p>
      <p>Created at: {props.created_at}</p>
    </div>
  );
};

export default User;
