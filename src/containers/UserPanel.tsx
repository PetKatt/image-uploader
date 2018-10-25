import * as React from 'react';

import EditPanel from "../components/UserPanel/EditPanel";
import Image from "../components/UserPanel/Image";
import ResolutionWindow from "../components/UserPanel/ResolutionWindow";

interface IChildComponentsProps extends React.Props<any> {
	images: any
}

class UserPanel extends React.Component<IChildComponentsProps, any> {

	state = {
		degree: 0,
		bw: false,
		filter: ""
	}

	handleRotateChange = (e: any) => {
		this.setState({ degree: e.target.value });
	}

	handleRotateSubmit = (e: any) => {
		const img: any = document.querySelector("img");
		img.style.transform = `rotate(${this.state.degree}deg)`;
		e.preventDefault();
	}

	handleButton = () => {
		this.setState((prevState: any) => ({
			bw: !prevState.bw
		}));
	}

	handleFilterChange = (e: any) => {
		this.setState({ filter: e. target.value });
	}

	handleFilterSubmit = () => {

	}

	public render() {
		/* Black and White*/
		if(this.state.bw) {
			const img: any = document.querySelector("img");
			img.style.filter = `grayscale(100%)`;
			this.setState({ bw: false });
		}

		/* Filter */
		if(this.state.filter === "blur") {
			const img: any = document.querySelector("img");
			img.style.filter = `blur(30px)`;
		} else if(this.state.filter === "sepia") {
			const img: any = document.querySelector("img");
			img.style.filter = `sepia(100%)`;
		} else if(this.state.filter === "none") {
			const img: any = document.querySelector("img");
			img.style.filter = `initial`;
		}

/*
		const imgClasses: any = [];
		if(this.state.bw) {
			imgClasses.push("blackandwhite");
		} else {
			const index: any = imgClasses.findIndex(x: any => x == "blackandwhite");
			if(index !== -1) {
				imgClasses.pull();
			}
		}
*/

		/* resolution data */
		const { images } = this.props;
		const width: any = images[0].width;
		const height: any = images[0].height;
		const res = (width: any, height: any) => {
			return width * height;
		} 

		return (
			<div className="userpanel">
				<EditPanel 
					onRotateSubmit={this.handleRotateSubmit}
					onRotateChange={this.handleRotateChange}
					onClick={this.handleButton}
					onFilterSubmit={this.handleFilterSubmit}
					onFilterChange={this.handleFilterChange}
					degree={this.state.degree}
					filter={this.state.filter} />
				<Image images={images} />
				<ResolutionWindow
					imgRes={res(width, height)}
					imgWidth={width}
					imgHeight={height} />
			</div>
		);
	}
}

export default UserPanel;