import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

class App extends Component {
  state = {}
  render() {
    return (<div className="app">
      <React.Fragment>
        <Header></Header>
        <Home></Home>
      </React.Fragment>
    </div>);
  }
}

export default App;