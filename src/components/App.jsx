import React, { useContext } from "react";
import { Home } from "../pages/Home";
import { Router } from "@reach/router";
import { Details } from "../pages/Details";
import { Layout } from "./Layout";
import { Favs } from "../pages/Favs";
import { User } from "../pages/User";
import { NotRegisteredUser } from "../pages/NotRegisteredUser";
import { AppContext } from "../context/AppContext";

const App = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <>
      <Layout>
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
          <Details path="/detail/:detailId" />
        </Router>
        {isAuth ? (
          <Router>
            <Favs path="/favs" />
            <User path="/user" />
          </Router>
        ) : (
          <Router>
            <NotRegisteredUser path="/favs" />
            <NotRegisteredUser path="/user" />
          </Router>
        )}
      </Layout>
    </>
  );
};

export default App;
