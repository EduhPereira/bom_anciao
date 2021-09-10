import { Switch, Route } from "react-router";
import { EventsVoluntary } from "../pages/eventsVoluntary";
import { InstitutionDetails } from "../pages/institutionDetails";
import LoginInstitution from "../pages/LoginInstitution";
import RegisterInstitution from "../pages/SignupInstitution";
import VoluntariesLogin from "../pages/VoluntariesLogin";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <InstitutionDetails/>
      </Route>
      <Route path="/login-institution">
        <LoginInstitution />
      </Route>
      <Route path="/signup-institution">
        <RegisterInstitution />
      </Route>
      <Route path="/login-voluntary">
        <VoluntariesLogin />
      </Route>
      <Route path="/event-voluntary">
        <EventsVoluntary/>
      </Route>
    </Switch>
  );
};

export default Routes;
