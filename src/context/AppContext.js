import { createContext, useState } from "react";

const AppContext = createContext({});
const { Provider, Consumer } = AppContext;

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const value = {
    isAuth,
    activateAuth: () => setIsAuth(true),
    desactiveAuth: () => setIsAuth(false),
  };
  return (
    <>
      <Provider value={value}>{children}</Provider>
    </>
  );
};

export { AppContext, AppContextProvider, Consumer };
