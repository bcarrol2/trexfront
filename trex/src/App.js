import React, { Component } from 'react';
import Quote from './components/Quote';
import ImageQuote from './components/ImageSquare';
import logo from './logo.svg';
import './main.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote />
        <ImageQuote />
      </div>
    );
  }
}

export default App;
