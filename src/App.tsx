import * as React from 'react';

import ImageUploader from "./components/ImageUploader";
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ImageUploader />
      </div>
    );
  }
}

export default App;
