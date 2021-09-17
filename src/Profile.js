import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return <>
    <h2>UserName : {this.props.user.name}</h2>
    <h2>User Email : {this.props.user.email}</h2>
    </>
  }
};

export default Profile;
