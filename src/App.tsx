import * as React from 'react';
import './App.css';
import { Button } from 'reactstrap';

import Header from './Layout/Header';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Button color="danger">Hello World</Button>

      </div>
    );
  }
}

export default App;
