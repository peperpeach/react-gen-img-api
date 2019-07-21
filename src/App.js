import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainContent />
      </React.Fragment>
    )
  }
}

export default App;
