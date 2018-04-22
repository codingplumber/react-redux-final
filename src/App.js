import React, { Component } from 'react';

import Header from './components/Header/Header';
import Cockpit from './components/Cockpit/Cockpit';
import styles from './Styles/Styles';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <Header />
        <Cockpit />
      </div>
    );
  }
}

export default App;

