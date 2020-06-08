import React from "react";
import Theme from './components/layouts/Theme';

import { BrowserRouter as Router} from "react-router-dom";
import { Header } from "./components/layouts/Header";
import Routes from '../src/routes/routes';

// import "../src/App.css";

function App() {
  return (
    <Router>
      <div className="App">
      <Theme>
        <div className="main">
          <Header />
          <Routes />
        </div>
        </Theme>
      </div>
    </Router>
  );
}

export default App;

