import React from "react";
import LoginInstitution from "./pages/LoginInstitution";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <LoginInstitution />
    </div>
  );
}

export default App;
