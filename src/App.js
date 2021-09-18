import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BestBooks from "./BestBooks";
import Login from "./Login";
import Profile from "./Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBookButton from "./AddBookButton";
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      show:false
    };
  }

  loginHandler = (user) => {
    this.setState({
      user: user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };
  onShow=()=>{
    this.setState({ 
      show: true
    })
  }
  modalHide=()=>{
    this.setState({ 
      show: false
    })
  }

bookAddingHandler = (result)=>{
this.setState({
  update:result
})
}

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? (
                <>
             <Button onClick={this.onShow}>
               Add Book 
             </Button >
                  <AddBookButton bookAddingHandler={this.bookAddingHandler}  user={this.state.user} show={this.state.show} modalHide={this.modalHide}/>
                  <BestBooks update={this.state.update} user={this.state.user} />
                </>
              ) : (
                <Login onLogin={this.loginHandler} />
              )}
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            <Route exact path="/profile">
              {this.state.user && <Profile user={this.state.user} />}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
