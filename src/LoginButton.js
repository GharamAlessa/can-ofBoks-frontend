import { Component } from "react";
import Button from "react-bootstrap/Button";
import LoginForm from "./LoginForm";
export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }
  clickHandling= () => {
    this.setState({ click: true });
  };


  render() {
    return (
      <>
        {this.state.click ? (
          <LoginForm onLogin = {this.props.onLogin} />
        ) : (
          <Button onClick={this.clickHandling} variant="primary">Login</Button>
        )}
      </>
    );
  }
}
