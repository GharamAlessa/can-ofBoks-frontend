import { Component } from "react";
import Button from "react-bootstrap/Button";

class LogoutButton extends Component {

  render() {
    return (
      <Button variant="danger" onClick={this.props.onLogout}>
        Log Out
      </Button>
    );
  }
};

export default LogoutButton;
