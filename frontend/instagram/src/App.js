import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Settings from './Components//Settings/Settings';
import uid from './uid';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


class App extends Component {
  state = {
    user : null
  }

  updateUser=(updateUser)=>{
    this.setState({
      user : updateUser
    })
  }

  componentDidMount(){
    axios.get(`/api/user/${uid}`).then( obj=>{
      let user = obj.data.user;
      this.setState({
          user
      })
  })
  }


  render() {
    return (
      <Router>
      {this.state.user ?  (
        <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home user={this.state.user} />
          </Route>

          <Route path="/profile" exact>
            <Profile user={this.state.user} />
          </Route>

          <Route path="/settings" exact>
            <Settings user={this.state.user} updateUser={this.updateUser} />
          </Route>

          <Route path="*" exact>
            <Redirect to="/"></Redirect>
          </Route>

        </Switch>
      </div>
      ) : ( <h1>Loading....</h1> ) }
      </Router>);   
  }
}

export default App;