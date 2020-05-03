import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import CategoryPage from "./CategoryPage";
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import Footer from "./Footer";
import SignUpPage from "./SignUpPage";
import RegistrationPage from "./RegistrationPage";
import ErrorPage from "./ErrorPage";
import GlobalStyles from "./GlobalStyles";
function App() {
  const isError = useSelector((state) => {
    return Object.keys(state)
      .map((reducer) => {
        return state[reducer].status;
      })
      .filter((status) => status === "error");
  });
  return (
    <BrowserRouter>
      <GlobalStyles />
      {isError.length ? (
        <ErrorPage />
      ) : (
        <>
          <div>
            <Header />
          </div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/article/:title">
              <MainPage />
            </Route>
            <Route path="/categories/:category">
              <CategoryPage />
            </Route>
            <Route path="/user">
              <SignUpPage />
            </Route>
            <Route path="/register">
              <RegistrationPage />
            </Route>
          </Switch>
          <div>
            <Footer />
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
