import * as React from 'react';
import { API_URL } from "../config";

import Msg from "../components/Msg";
import InputFile from "../components/InputFile";
import Welcome from "../components/Welcome";
import SpinLoader from "../components/SpinLoader";
import UserPanel from "./UserPanel";


class Container extends React.Component<any, any> {

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
    console.log(event.target.files[0]);
    const myImage = event.target.files[0];
    const formData = new FormData();
    const types = ['image/png', 'image/jpeg', 'image/gif'];

    if(types.every(type => myImage.type !== type)) {
      this.setState({alertMsg: "Your image has invalid format! :("});
    } else if(myImage.size > 200000) {
      this.setState({alertMsg: "Your image is too big! :("})
    } else {
      formData.append("myInage", myImage);
    }

    // UPLOADING START
    this.setState({ uploading: true }); 
    fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData
    }).then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(images => {
      console.log("IMAGES!!!! :", images);
      this.setState({
        uploading: false, 
        images
      })
    })
    .catch(err => {
      err.json().then((e: any) => {
        this.setState({ uploading: false })
      })
    })
  }

  /*filter = (id: any) => {
    return this.state.images.filter(img => img.public_id != id);
  }

  removeImage = id => {
    this.setState({ images: this.filter(id) });
  }

  onError = id => {
    alert("Something went wrong ?!?!?!?");
    this.setState({ images: this.filter(id) });
  }*/

	public render() {
    const { initializing, uploading, images } = this.state;
    
    const content = () => {
      switch(true) {
        case initializing:
          return <Welcome />;
        case images.length === 1:
          return <UserPanel images={this.state.images}/>;
        case uploading:
          return <SpinLoader />;
        default:
          return <InputFile onChange={this.imageSelectedHandler} />
      }
    }

		return (
      <div className="container">
        {content()}
        { this.state.alertMsg ? <Msg alertMsg={this.state.alertMsg} /> : null }
      </div>
		);
	}
} 

export default Container;