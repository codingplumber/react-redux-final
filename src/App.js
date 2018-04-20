import React, { Component } from 'react';

import Header from './components/Header/Header';
import Controller from './containers/Controller/Controller';
import styles from './Styles/Styles';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <Header />
        <Controller />
      </div>
    );
  }
}

export default App;

