import * as React from 'react';

import EditPanel from "../components/UserPanel/EditPanel";
import Image from "../components/UserPanel/Image";
import ResolutionWindow from "../components/UserPanel/ResolutionWindow";

interface Props {
	images: any[],
	removeImage: (() => void)
}

interface State {
	degree: number,
	filter: string
}


class UserPanel extends React.Component<Props, State> {

	state = {
		degree: 0,
		filter: ""
	}

	handleRotateChange = (e: any): void => {
		this.setState({ degree: e.target.value });
	}

	handleRotateSubmit = (e: any): void => {
		const img: any = document.querySelector("img");
		img.style.transform = `rotate(${this.state.degree}deg)`;
		e.preventDefault();
	}

	handleFilterChange = (e: any): void => {
		this.setState({ filter: e.target.value });
	}
	

	public render() {
		/* Filter */
		if(this.state.filter === "blur") {
			const img: any = document.querySelector("img");
			img.style.filter = `blur(30px)`;
		} else if(this.state.filter === "sepia") {
			const img: any = document.querySelector("img");
			img.style.filter = `sepia(100%)`;
		} else if(this.state.filter === "bw") {
			const img: any = document.querySelector("img");
			img.style.filter = `grayscale(100%)`;
		} else if(this.state.filter === "none") {
			const img: any = document.querySelector("img");
			img.style.filter = `initial`;
		}

		/* resolution data */
		const { images } = this.props;
		const width: number = images[0].width;
		const height: number = images[0].height;
		const res = (width: number, height: number) => {
			return width * height;
		} 

		return (
			<div className="userpanel">
				<EditPanel 
					onRotateSubmit={this.handleRotateSubmit}
					onRotateChange={this.handleRotateChange}
					onFilterChange={this.handleFilterChange}
					degree={this.state.degree}
					filter={this.state.filter} />
				<Image images={images} removeImage={this.props.removeImage} />
				<ResolutionWindow
					imgRes={res(width, height)}
					imgWidth={width}
					imgHeight={height} />
			</div>
		);
	}
}

export default UserPanel;