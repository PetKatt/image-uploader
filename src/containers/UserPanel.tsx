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
	duotoneObj: object
}


class UserPanel extends React.Component<Props, State> {

	state = {
		degree: 0,
		filterSelected: "",
		style: {
			maxWidth: "1000px",
			maxHeight: "700px"
		},
		duotoneObj: {
			colorOneRED: 40,
			colorOneGREEN: 120,
			colorOneBLUE: 120,
			colorTwoRED: 60,
			colorTwoGREEN: 150,
			colorTwoBLUE: 150
		}
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
		this.setState({ duotoneObj: { colorOneRED: e.target.value }});
	}
	colorOneGreenChange = (e: any): void => {
		this.setState({ duotoneObj: { colorOneGREEN: e.target.value }});
	}
	colorOneBlueChange = (e: any): void => {
		this.setState({ duotoneObj: { colorOneBLUE: e.target.value }});
	}
	colorTwoRedChange = (e: any): void => {
		this.setState({ duotoneObj: { colorTwoRED: e.target.value }});
	}
	colorTwoGreenChange = (e: any): void => {
		this.setState({ duotoneObj: { colorTwoGREEN: e.target.value }});
	}
	colorTwoBlueChange = (e: any): void => {
		this.setState({ duotoneObj: { colorTwoBLUE: e.target.value }});
	}	


	public render() {
		const { degree, filterSelected, style, duotoneObj } = this.state;
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
		const colorOneArray: number[] = [duotoneObj["colorOneRED"], duotoneObj["colorOneGREEN"], duotoneObj["colorOneBLUE"]];
		const colorTwoArray: number[] = [duotoneObj["colorTwoRED"], duotoneObj["colorTwoGREEN"], duotoneObj["colorTwoBLUE"]];
		const duotoneObjChange: object = {
			colorOneRedChange: this.colorOneRedChange,
			colorOneGreenChange: this.colorOneGreenChange,
			colorOneBlueChange: this.colorOneBlueChange,
			colorTwoRedChange: this.colorTwoRedChange,
			colorTwoGreenChange: this.colorTwoGreenChange,
			colorTwoBlueChange: this.colorTwoBlueChange
		};


		return (
			<div className="userpanel">
				<EditPanel 
					onRotateSubmit={this.handleRotateSubmit}
					onRotateChange={this.handleRotateChange}
					onFilterChange={this.handleFilterChange}
					degree={degree}
					filter={filterSelected}
					duotoneObj={duotoneObj}
					duotoneObjChange={duotoneObjChange} />
				{/*<Image images={images} removeImage={this.props.removeImage} />*/}
				<ImageFilter
					className="image fadein"
					style={style}
					svgStyle={svgStyle}
	        image={images[0].secure_url}
	        filter={ filterType }
	        colorOne={ colorOneArray }
	        colorTwo={ colorTwoArray } />
				<ResolutionWindow
					imgRes={res(width, height)}
					imgWidth={width}
					imgHeight={height} />
			</div>
		);
	}
}

export default UserPanel;