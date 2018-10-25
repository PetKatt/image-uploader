import * as React from 'react';

export default (props: any) => (
	<div className="resolution">
		<h3>Resolution</h3>
		<div>{props.imgRes} pixels</div>
		<h3>Width</h3>
		<div>{props.imgWidth} pixels</div>
		<h3>Height</h3>
		<div>{props.imgHeight} pixels</div>
	</div>
);