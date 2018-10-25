import * as React from 'react';

import Container from "./containers/Container";
import './App.css';


class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
