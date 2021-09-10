import React from "react";
import Solicitations from "./pages/solicitations";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Solicitations />
    </div>
  );
}

export default App;
