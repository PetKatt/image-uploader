import * as React from 'react';

class ImageUploader extends React.Component {

	state = {
    selectedImage: null
  }

  imageSelectedHandler = (event: any) => {
    this.setState({
      selectedImage: event.target.files[0]
    }); 
  }

  imageUploadHandler = (event: any) => {
    console.log(this.state.selectedImage);
  }
  
	public render() {
		return (
      <div>
  			<input type="file" onChange={this.imageSelectedHandler} />
        <button onClick={this.imageUploadHandler}>Upload image</button>
      </div>
		);
	}
} 

export default ImageUploader;