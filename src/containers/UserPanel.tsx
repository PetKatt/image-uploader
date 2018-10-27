import * as React from 'react';
import ImageFilter from 'react-image-filter';

import EditPanel from "../components/UserPanel/EditPanel";
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
		filterSelected: "none",
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

	/* handlers for edit panel */
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

	duotoneChangeHandler = (e: any): void => {
		let obj: object = this.state.duotoneObj;
		obj[e.target.name] = e.target.value;
		this.setState({ duotoneObj: obj });
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

		return (
			<div className="userpanel">
				<EditPanel 
					onRotateSubmit={this.handleRotateSubmit}
					onRotateChange={this.handleRotateChange}
					onFilterChange={this.handleFilterChange}
					degree={degree}
					filter={filterSelected}
					duotoneObj={duotoneObj}
					duotoneChangeHandler={this.duotoneChangeHandler} />
				<ImageFilter
					className="image fadein"
					style={style}
					svgStyle={svgStyle}
	        image={images[0].secure_url}
	        filter={ (filterSelected !== "none") ? filterSelected : undefined }
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