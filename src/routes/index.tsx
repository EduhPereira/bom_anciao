import { Switch, Route } from "react-router";
import LoginInstitution from "../pages/LoginInstitution";
import RegisterInstitution from "../pages/SignupInstitution";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login-institution">
        <LoginInstitution />
      </Route>
      <Route path="/signup-institution">
        <RegisterInstitution />
      </Route>
    </Switch>
  );
};

export default Routes;
