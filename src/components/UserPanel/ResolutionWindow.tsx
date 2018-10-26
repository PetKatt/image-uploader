import * as React from 'react';

interface Props {
	imgRes: number,
	imgWidth: number,
	imgHeight: number
}

export default (props: Props) => (
	<div className="resolution">
		<h3>Resolution</h3>
		<div>{props.imgRes} pixels</div>
		<h3>Width</h3>
		<div>{props.imgWidth} pixels</div>
		<h3>Height</h3>
		<div>{props.imgHeight} pixels</div>
	</div>
);