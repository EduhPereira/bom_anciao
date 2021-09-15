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
import { PageNotFound } from "../components/pageNotFound";

const Routes = () => {

  const { userToken: token } = useLogin()

  const { institutionId } = useAuthInstitution()

  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>

      <Route path="/login-voluntary">
        {token ? <Redirect to="/my-events"/> : <VoluntariesLogin/>}
      </Route>

      <Route path="/signup-voluntary">
        {token ? <Redirect to="/my-events"/> : <UserRegister />}
      </Route>

      <Route path="/my-events">
        {token ? <EventsVoluntary /> : <Redirect to="/login-voluntary"/>}
      </Route>

      <Route path="/profile">
        {token ? <VoluntariesProfile/> : <Redirect to="/login-voluntary"/>}
      </Route>

      <Route path="/institution/:id">
        {token ? <InstitutionDetails /> : <Redirect to="/login-voluntary"/>}
      </Route>

      <Route path="/search-institutions">
        {token ? <InstitutionSearch/> : <Redirect to="/login-voluntary"/>}
      </Route>

      



      <Route path="/login-institution">
      {institutionId ? <Redirect to="/events-institution"/> : <LoginInstitution />}
      </Route>

      <Route path="/signup-institution">
        {institutionId ? <Redirect to="/events-institution"/> : <RegisterInstitution />}
      </Route>

      <Route path="/events-institution">
        {institutionId ? <DashboardInstitution /> : <Redirect to="/login-institution"/>}
      </Route>

      <Route path="/institution-data">
        {institutionId ? <InstitutionProfile />: <Redirect to="/login-institution"/>}
      </Route>

      <Route path="/donations">
        {institutionId ? <Solicitations />: <Redirect to="/login-institution"/>}
        
      </Route>

      <Route path="*">
        <PageNotFound/>
      </Route>

    </Switch>
  );
};

export default Routes;
