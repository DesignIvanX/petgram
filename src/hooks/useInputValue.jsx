import { useState } from "react";

export const useInputValue = () => {
  const [form, setValue] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>
    setValue({ ...form, [e.target.name]: e.target.value });

  return { form, handleFormChange };
};
