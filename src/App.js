import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthForms from "./auth-forms/AuthForms";
function App() {
  const [signedIn, setsignedIn] = useState(false);
  // return <div>{!signedIn && <AuthForms signedIn={1} />}</div>;
  return (
    <Router>
      <Redirect to="/signin" />
      <Switch>
        <Route path="/signin" exact={true}>
          {!signedIn && <AuthForms signedIn={1} />}
        </Route>
        <Route path="/register" exact={true}>
          {!signedIn && <AuthForms signedIn={2} />}
        </Route>
        <Route path="/reset-password" exact={true}>
          {!signedIn && <AuthForms signedIn={3} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
