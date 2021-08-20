import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { UserForm } from "../components/UserForm";
import Dog from "../static/dog.png";
import {
  Link,
  Img,
  Paragraph,
  Content,
} from "../components/style/NotRegisteredUser";
export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  const handleActivateAuthSubmit = () => {
    activateAuth(true);
  };
  return (
    <Content>
      <div>
        <Img src={Dog} alt="dog" />
      </div>
      <div>
        <Paragraph>
          Login with your petgram account and discover the amazing world of
          pets.
        </Paragraph>
      </div>
      <UserForm onSubmit={handleActivateAuthSubmit} />
      <div>
        <Link to="/checkin">¿You do not have an account? Check in</Link>
      </div>
    </Content>
  );
};
