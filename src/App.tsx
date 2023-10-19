import React, { useState } from "react";
import axios from "axios";

import Modal from "./components/Modal/Modal";
import User, { UserProps } from "./components/User/User";

const App = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  
  const loadUser = async (userName: string) => {
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    return response;
  };

  const handleLoadUser = async (userName: string) => {
    const response = await loadUser(userName);
    setUser(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <Modal loadUser={handleLoadUser} />
      {user && <User {...user} />}
    </div>
  );
};

export default App;