import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Chicago JS</h2>
        </div>
        <p className="App-intro">
          <h2>Current Javascript Meetups</h2>
          <h3><a href="https://www.meetup.com/js-chi/">Chicago Javascript Meetup Group</a></h3>
          <p>Meet other local JavaScripters to network, share knowledge, to review the state of the art, or to dream up new applications.</p>  

          <h3><a href="https://www.meetup.com/Chicago-Nodejs/">Chicago Node.js</a></h3>
          <p>A group to discuss Node.js, its frameworks, and best practices.</p> 

          <h3><a href="https://www.meetup.com/React-Chicago/">React Chicago</a></h3>
          <p>This meetup is focused on bringing everyone together who have an interest in React, React Native, and it's ecosystem.</p>

          <h3><a href="https://www.meetup.com/AngularJS-Chicago/">AngularJS Chicago</a></h3>
          <p>AngularJS meetup group in Chicago, IL discussing how to leverage and evolve the 'Superheroic JavaScript MVW Framework'.</p>

        </p>
      </div>
    );
  }
}

export default App;