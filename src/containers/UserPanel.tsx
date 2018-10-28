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
			
		},
		duotoneObj: {
			colorOneRED: 40,
			colorOneGREEN: 80,
			colorOneBLUE: 120,
			colorTwoRED: 90,
			colorTwoGREEN: 200,
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

		/* remove black screens from both sides after animation has been done*/
		const leftScreen: any = document.body.querySelector("div.left-screen");
		const rightScreen: any = document.body.querySelector("div.right-screen");
		leftScreen.style.display = "none";
		rightScreen.style.display = "none";

		/* process resolution data */
		const { images } = this.props;
		const width: number = images[0].width;
		const height: number = images[0].height;
		const res = (width: number, height: number): number => {
			return width * height;
		} 

		/* make duotone filter arrays*/
		const colorOneArray: number[] = [duotoneObj["colorOneRED"], duotoneObj["colorOneGREEN"], duotoneObj["colorOneBLUE"]];
		const colorTwoArray: number[] = [duotoneObj["colorTwoRED"], duotoneObj["colorTwoGREEN"], duotoneObj["colorTwoBLUE"]];

		return (
			<div className="userpanel" role="userpanel">
				<EditPanel 
					onRotateSubmit={this.handleRotateSubmit}
					onRotateChange={this.handleRotateChange}
					onFilterChange={this.handleFilterChange}
					degree={degree}
					filter={filterSelected}
					duotoneObj={duotoneObj}
					duotoneChangeHandler={this.duotoneChangeHandler}
					disabled={ filterSelected === "duotone" ? false : true } />
				<ImageFilter
					className="image fadein"
					style={style}
					svgStyle={svgStyle}
	        image={images[0].secure_url}
	        filter={ filterSelected !== "none" ? filterSelected : undefined }
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