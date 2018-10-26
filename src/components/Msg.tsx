import * as React from 'react';

interface Props {
	alertMsg: string
}

export default (props: Props) => (
	<div className="alert">
		<h1>{props.alertMsg}</h1>
	</div>
);