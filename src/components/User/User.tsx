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
    <body>
      <main className="user-card">
        <header className="user-header">
          <img src={props.avatar_url} alt="Avatar" />
        </header>

        <section className="user-info">
          <p>Login: {props.login}</p>
          <p>Location: {props.location}</p>
          <p>Followers: {props.followers}</p>
          <p>Following: {props.following}</p>
          <p>Created at: {props.created_at}</p>
        </section>

        <section className="user-nav-social-redes">
          <ul>
            <li>
              <a href="#" className="fa fa-facebook"></a>
            </li>
            <li>
              <a href="#" className="fa fa-twitter"></a>
            </li>
            <li>
              <a href="#" className="fa fa-linkedin"></a>
            </li>
            <li>
              <a href="#" className="fa fa-youtube"></a>
            </li>
          </ul>
        </section>

        <footer className="user-footer">
          <p>Footer</p>
        </footer>
      </main>
    </body>
  );
};

export default User;
