import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import SignUp from "./Components/SignUp/SignUp";
import SigninPage from "./Components/SignIn/SigninPage";
import Topbar from "./Components/TopBar/TopBar";
import Home from "./Components/Home/Home";

export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        {/* {userData ? <Topbar /> : ""} */}
        <Topbar />
        <Switch>
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/home" exact >
          <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </UserContext.Provider>
  );
}
