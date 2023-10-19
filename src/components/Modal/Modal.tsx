import React, { useState } from "react";
import Button from "../Button/Button";

interface ModalProps {
  loadUser: (userName: string) => Promise<void>;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await props.loadUser(userName);
    setLoading(false);
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={userName} onChange={handleInputChange} />
          <button type="submit">Search</button>
          <Button color="button-primary" text="Buscar" />
        </form>
        {loading && (
          <>
            <p>Loading...</p>
          </>
        )}
      </div>
    </>
  );
};

export default Modal;