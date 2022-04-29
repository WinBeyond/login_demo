// import { message } from 'antd-message';
import axios from 'axios';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import Login from './components/Login';

if (process.env.NODE_ENV !== 'production') {
  require('./mock');
}

class App extends Component {
  state = {
    results: [],
    disableLocal: false,
    disableRegister: false,
    userInfo: null,
  };

  componentDidMount() {
    axios
      .get('/api/get_user')
      .then((resp) => {
        if (resp.data.code === 0) {
          this.setState({ userInfo: resp.data.data });
        }
      })
      .catch((resp) => {});
  }

  render() {
    if (this.state.userInfo) {
      return <Home></Home>;
    } else {
      return <Login></Login>;
    }
  }

  handleLogin = (content) => {
    this.addResult(`Logging in with ${JSON.stringify(content)}`);
  };
  handleLoginWithProvider = (provider) => {
    this.addResult(`Logging in with provider=${provider}`);
  };
  handleRegister = (content) => {
    this.addResult(`Registering with ${JSON.stringify(content)}`);
  };
  handleRegisterWithProvider = (provider) => {
    this.addResult(`Registering with provider=${provider}`);
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  addResult = (msg) => {
    this.setState((prevState) => {
      return {
        results: [...prevState.results, msg],
      };
    });
  };
}

render(<App />, document.getElementById('root'));
