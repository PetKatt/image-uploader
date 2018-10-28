import * as React from 'react';
import { API_URL } from "../config";

import Msg from "../components/Msg";
import InputFile from "../components/InputFile";
import Welcome from "../components/Welcome";
import SpinLoader from "../components/SpinLoader";
import UserPanel from "./UserPanel";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface State {
  initializing: boolean,
  uploading: boolean,
  images: object[],
  alertMsg: string
}


class Container extends React.Component<object, State> {

	state = {
    initializing: true,
    uploading: false,
    images: [],
    alertMsg: ""
  }

  componentDidMount() { // INITIALIZING SERVER
    fetch(`${API_URL}/initialize`)
      .then((res) => {
        if(res.ok) return this.setState({ initializing: false }); 
      });
  }

  imageSelectedHandler = (event: any) => {
    const myImage = event.target.files[0];
    const formData = new FormData();
    const types = ['image/jpeg', 'image/png', 'image/gif'];

    /* validating input data*/
    if(types.every(type => myImage.type !== type)) {
      this.setState({ alertMsg: "Your image has invalid format! :(" });
    } else if(myImage.size > 200000) {
      this.setState({ alertMsg: "Your image is too big! :(" });
    } else {
      formData.append("myImage", myImage);
    }

    /* START UPLOADING */
    this.setState({ uploading: true }); 
    fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData
    }).then(res => {
      if(!res.ok) {
        throw res;
      }
      return res.json();
    }).then(images => {
      this.setState({
        uploading: false, 
        images
      });
    }).catch(err => {
      err.json().then((e: object) => {
        this.setState({ uploading: false });
      });
    });
  }

  removeImage = (): void => {
    this.setState({ images: [] });
  }


	public render() {
    const { initializing, uploading, images, alertMsg } = this.state;
    
    const content = (): any => {
      switch(true) {
        case initializing:
          return <Welcome />;
          break;
        case images.length > 0:
          return <UserPanel images={images} />;
          break;
        case uploading:
          return <SpinLoader />;
          break;
        default:
          return <InputFile onChange={this.imageSelectedHandler} />;
          break;
      }
    }

		return (
      <div className="container" role="uploader">
        <Header removeImage={this.removeImage} />
        {content()}
        { alertMsg ? <Msg alertMsg={alertMsg} /> : null }
        <Footer />
      </div>
		);
	}
} 

export default Container;