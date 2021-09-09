import React from "react";
import GlobalStyle from "./styles/global";
import { LandingPage } from "./pages/landingPage";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <LandingPage />
    </div>
  );
}

export default App;
