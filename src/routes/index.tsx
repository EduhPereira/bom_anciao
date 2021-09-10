import { Switch, Route } from "react-router";
import DashboardInstitution from "../pages/DashboardInstitution";
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
      <Route path="/dashboard-institution">
        <DashboardInstitution />
      </Route>
    </Switch>
  );
};

export default Routes;
