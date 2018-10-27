import * as React from 'react';

interface Props {
	imgRes: number,
	imgWidth: number,
	imgHeight: number
}

export default (props: Props) => (
	<div className="resolution">
		<h3>Resolution</h3>
		<div>{props.imgRes} <span>pixels</span></div>
		<h3>Width</h3>
		<div>{props.imgWidth} <span>pixels</span></div>
		<h3>Height</h3>
		<div>{props.imgHeight} <span>pixels</span></div>
	</div>
);