import { useState } from "react";

import Card from "./components/Card/Card";
import User from "./components/User/User";

interface UserResponse {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
  created_at: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);

  const handleLoadUser = (userData: UserResponse) => {
    setUser(userData);
  };
  
  return (
    <div>
      <Card loadUser={handleLoadUser}/>
      {user && <User {...user}  />}
    </div>
  );
};

export default App;