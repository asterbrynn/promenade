import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header" style={{borderBottom: "5px solid rebeccapurple"}}>
          <h1>Poly Partner Promenade</h1>
        </header>
        <List/>
      </div>
    );
  }
}

export default App;
