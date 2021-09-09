import React from "react";
import { InstitutionDetails } from "./components/institutionDetails";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <InstitutionDetails/>
    </div>
  );
}

export default App;
