import React, { FormEvent, useState } from "react";
import axios from "axios";

import "./Card.scss";
import Button from "../Button/Button";

interface UserResponse {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
  created_at: string;
}

interface CardProps {
  loadUser: (user: UserResponse) => void;
}

const Card: React.FC<CardProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const loadUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      props.loadUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao carregar informações do usuário", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>Challange Meli - API GitHub</h1>
      </div>
      <div className="card-content">
        <form onSubmit={loadUser}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button type="submit" color="primary" text="Search User" />
          {loading && <p>Loading...</p>}
        </form>
      </div>
    </>
  );
};

export default Card;
