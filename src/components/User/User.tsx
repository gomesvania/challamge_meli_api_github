import React, { useState } from "react";

interface UserProps {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
  created_at: string;
}

const User: React.FC<UserProps> = (props) => {
  const [user, setUser] = useState<UserProps | null>(null);
  
  return (
    <>
      <div>
        {!user && (
          <>
            <img src={props.avatar_url} alt={props.login} />
            <h2>{props.login}</h2>
            <p>{props.location}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            <p>Created at: {props.created_at}</p>
          </>
        )}
      </div>
    </>
  );
};

export default User;
