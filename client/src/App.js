import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import FormikLoginForm from "./components/FormikLoginForm";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={FormikLoginForm} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
