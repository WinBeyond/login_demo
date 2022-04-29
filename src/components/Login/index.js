import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleSubmit = (content) => {
    axios
      .post('/api/login', {
        name: this.state.username,
        password: this.state.password,
      })
      .catch(() => {
        alert('login error');
      });
  };

  handleReset = (content) => {
    console.log(content.target, this.state);
    this.setState({ username: '', password: '' });
  };

  getStyle = () => {
    return makeStyles((theme) => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    }));
  };

  render() {
    const wrapperStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid black',
      padding: 5,
      alignItems: 'center',
    };

    const buttonsWrapperStyle = {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
    };
    const classes = this.getStyle();

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <div className="wrapper" style={wrapperStyle}>
              <TextField
                hintText="Enter your name"
                floatingLabelText="Name"
                floatingLabelFixed
                value={this.state.username}
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                value={this.state.password}
                floatingLabelFixed
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <div className="buttonsWrapper" style={buttonsWrapperStyle}>
                <RaisedButton
                  label="Login"
                  primary={true}
                  style={style}
                  onClick={(event) => this.handleSubmit(event)}
                />
                <RaisedButton
                  label="Reset"
                  primary={true}
                  style={style}
                  onClick={(event) => this.handleReset(event)}
                />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;
