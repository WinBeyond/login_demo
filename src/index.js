import React, { Component } from "react";
import { render } from "react-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Login from "./components/Login";
import Result from "./Result";

class App extends Component {
  state = {
    results: [],
    disableLocal: false,
    disableRegister: false
  };

  render() {
    return (
      <div>
        <Login />

        {this.state.results.map(r => (
          <Result key={r} message={r} />
        ))}

      </div>
    );
  }

  handleLogin = content => {
    this.addResult(`Logging in with ${JSON.stringify(content)}`);
  };
  handleLoginWithProvider = provider => {
    this.addResult(`Logging in with provider=${provider}`);
  };
  handleRegister = content => {
    this.addResult(`Registering with ${JSON.stringify(content)}`);
  };
  handleRegisterWithProvider = provider => {
    this.addResult(`Registering with provider=${provider}`);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  addResult = msg => {
    this.setState(prevState => {
      return {
        results: [...prevState.results, msg]
      };
    });
  };
}

render(<App />, document.getElementById("root"));
