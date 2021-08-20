import React from "react";
import { useInputValue } from "../hooks/useInputValue";
import { Form, Button, Input } from "./style/Form";
export const UserForm = ({ onSubmit }) => {
  const { form, handleFormChange } = useInputValue();
  const { email, password } = form;
  return (
    <Form onSubmit={onSubmit} require>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleFormChange}
        require
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleFormChange}
        require
      />
      <Button>Login</Button>
    </Form>
  );
};
