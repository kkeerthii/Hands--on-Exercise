import React, { Component } from "react";
import "./App.css";

function GuestGreeting() {
  return <h2>Please sign up.</h2>;
}

function UserGreeting() {
  return <h2>Welcome back</h2>;
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;

    if (isLoggedIn) {
      button = (
        <LogoutButton onClick={this.handleLogoutClick} />
      );
    } else {
      button = (
        <LoginButton onClick={this.handleLoginClick} />
      );
    }

    return (
      <div className="App">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default App;