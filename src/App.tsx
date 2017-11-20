import * as React from 'react';
import './App.css';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import BodyRoutes from './Layout/BodyRoutes';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">

          <BodyRoutes />

          <Footer />

        </div>

      </div>
    );
  }
}

export default App;
