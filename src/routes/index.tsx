import { Switch, Route, Redirect } from "react-router";
import DashboardInstitution from "../pages/DashboardInstitution";
import LoginInstitution from "../pages/LoginInstitution";
import RegisterInstitution from "../pages/SignupInstitution";
import VoluntariesLogin from "../pages/VoluntariesLogin";
import UserRegister from "../pages/UserRegister";
import { InstitutionDetails } from "../pages/institutionDetails";
import { LandingPage } from "../pages/landingPage";
import InstitutionSearch from "../pages/InstitutionSearch";
import { EventsVoluntary } from "../pages/eventsVoluntary";
import Solicitations from "../pages/Solicitations";
import VoluntariesProfile from "../pages/voluntariesProfile";
import InstitutionProfile from "../pages/institutionsProfile";
import { useLogin } from "../Providers/Login-Voluntaries";
import { useAuthInstitution } from "../Providers/Institution-Provider";

const Routes = () => {

  const { userToken } = useLogin()

  const { institutionId } = useAuthInstitution()

  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/login-institution">
        <LoginInstitution />
      </Route>
      <Route path="/signup-institution">
        <RegisterInstitution />
      </Route>
      <Route path="/events-institution">
        <DashboardInstitution />
      </Route>
      <Route path="/login-voluntary">
        <VoluntariesLogin />
      </Route>
      <Route path="/signup-voluntary">
        <UserRegister />
      </Route>

      <Route path="/my-events">
        <EventsVoluntary />
      </Route>

      <Route path="/profile">
        <VoluntariesProfile />
      </Route>

      <Route path="/institution-data">
        <InstitutionProfile />
      </Route>

      <Route path="/search-institutions">
        <InstitutionSearch />
      </Route>

      <Route path="/institution/:id">
        <InstitutionDetails />
      </Route>

      <Route path="/donations">
        <Solicitations />
      </Route>

    </Switch>
  );
};

export default Routes;
