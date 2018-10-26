import * as React from 'react';

import Container from "./containers/Container";
import './App.css';


class App extends React.Component<any, any> {
  public render() {

  	/* background moving */
  	const translateBack = (e: any) => {
			console.log(e.pageX, e.pageY);
			let pageX = -((e.pageX - screen.width / 2) / 5);
			let pageY = -((e.pageY - screen.height / 2) / 5);
			document.body.style.backgroundPosition = `${pageX}px ${pageY}px`;
		}
		document.body.addEventListener("mousemove", translateBack);

    return (
      <div className="App fadein">
        <Container />
        <div className="left-screen"></div>
        <div className="right-screen"></div>
        <div className="loader-container">
        	<div className="loader"></div>
        </div>
      </div>
    );
  }
}

export default App;
