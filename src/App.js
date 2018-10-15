import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './components/Table'
import { siteList } from './constants'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Table siteList={siteList}/>
        </header>
      <Footer/>
      </div>
    );
  }
}

export default App;
