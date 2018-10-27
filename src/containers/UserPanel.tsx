import * as React from 'react';
import ImageFilter from 'react-image-filter';

import EditPanel from "../components/UserPanel/EditPanel";
/*import Image from "../components/UserPanel/Image";*/
import ResolutionWindow from "../components/UserPanel/ResolutionWindow";

interface Props {
	images: any[]
}

interface State {
	degree: number,
	filterSelected: string,
	style: object,
	colorOneRed: number,
	colorOneGreen: number,
	colorOneBlue: number,
	colorTwoRed: number,
	colorTwoGreen: number,
	colorTwoBlue: number
}


class UserPanel extends React.Component<Props, State> {

	state = {
		degree: 0,
		filterSelected: "",
		style: {
			maxWidth: "1000px",
			maxHeight: "700px"
		},
		colorOneRed: 40,
		colorOneGreen: 120,
		colorOneBlue: 120,
		colorTwoRed: 60,
		colorTwoGreen: 150,
		colorTwoBlue: 150
	}

	handleRotateChange = (e: any): void => {
		this.setState({ degree: e.target.value });
	}

	handleRotateSubmit = (e: any): void => {
		const img: any = document.querySelector(".image");
		img.style.transform = `rotate(${this.state.degree}deg)`;
		e.preventDefault();
	}

	handleFilterChange = (e: any): void => {
		this.setState({ filterSelected: e.target.value });
	}


	handleWidthChange = (id: string): void => {
		switch(true) {
			case id === "undex1380":
				this.setState({ style: {
					maxWidth: "700px",
					maxHeight: "450px"
				}});
				break;
			case id === "under860":
				this.setState({ style: {
					maxWidth: "400px",
					maxHeight: "250px"
				}});
				break;
		}	
	}

	/* duotone filter change handlers*/
	colorOneRedChange = (e: any): void => {
		this.setState({ colorOneRed: e.target.value });
	}
	colorOneGreenChange = (e: any): void => {
		this.setState({ colorOneGreen: e.target.value });
	}
	colorOneBlueChange = (e: any): void => {
		this.setState({ colorOneBlue: e.target.value });
	}
	colorTwoRedChange = (e: any): void => {
		this.setState({ colorTwoRed: e.target.value });
	}
	colorTwoGreenChange = (e: any): void => {
		this.setState({ colorTwoGreen: e.target.value });
	}
	colorTwoBlueChange = (e: any): void => {
		this.setState({ colorTwoBlue: e.target.value });
	}	

	public render() {
		const { degree, filterSelected, style } = this.state;
		const svgStyle: object = {
			boxShadow: ".6em .6em 2em .5em #252525, .3em .3em 2em .2em #A982C1"
		}

		/* Screen width reading*/
		const readWidth: ((event: any) => void) = (e) => {
			let pageX: number = e.pageX;
			switch(true) {
				case pageX < 1380 :
					this.handleWidthChange("under1380");
					break;
				case pageX < 860:
					this.handleWidthChange("under860");
					break;
			}
		}
		document.body.addEventListener("onLoad", readWidth);

		/* Filter */
		let filterType: string = "";
		switch(true) {
			case filterSelected === "duotone":
				filterType = "duotone";
				break;
			case filterSelected === "invert":
				filterType = "invert";
				break;
			case filterSelected === "sepia":
				filterType = "sepia";
				break;
			case filterSelected === "grayscale":
				filterType = "grayscale";
				break;
			default:
				filterType = "grayscale";
				break;
		}
		
		/* resolution data */
		const { images } = this.props;
		const width: number = images[0].width;
		const height: number = images[0].height;
		const res = (width: number, height: number): number => {
			return width * height;
		} 

		/* duotone filter arrays*/
		const colorOneArray: number[] = [this.state.colorOneRed, this.state.colorOneGreen, this.state.colorOneBlue];
		const colorTwoArray: number[] = [this.state.colorTwoRed, this.state.colorTwoGreen, this.state.colorTwoBlue];


		return (
			<div className="userpanel">
				<EditPanel 
					onRotateSubmit={this.handleRotateSubmit}
					onRotateChange={this.handleRotateChange}
					onFilterChange={this.handleFilterChange}
					degree={degree}
					filter={filterSelected}
					colorOneRed={this.state.colorOneRed}
					colorOneGreen={this.state.colorOneGreen}
					colorOneBlue={this.state.colorOneBlue}
					colorTwoRed={this.state.colorTwoRed}
					colorTwoGreen={this.state.colorTwoGreen}
					colorTwoBlue={this.state.colorTwoBlue}
					colorOneRedChange={this.colorOneRedChange}
					colorOneGreenChange={this.colorOneGreenChange}
					colorOneBlueChange={this.colorOneBlueChange}
					colorTwoRedChange={this.colorTwoRedChange}
					colorTwoGreenChange={this.colorTwoGreenChange}
					colorTwoBlueChange={this.colorTwoBlueChange}
								/>
				{/*<Image images={images} removeImage={this.props.removeImage} />*/}
				<ImageFilter
					className="image fadein"
					style={style}
					svgStyle={svgStyle}
	        image={images[0].secure_url}
	        filter={ filterType }
	        colorOne={ colorOneArray }
	        colorTwo={ colorTwoArray }
	      />
				<ResolutionWindow
					imgRes={res(width, height)}
					imgWidth={width}
					imgHeight={height} />
			</div>
		);
	}
}

export default UserPanel;