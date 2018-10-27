import * as React from 'react';

interface Props {
	removeImage: (() => void)
}

export default (props: Props) => (
	<header>
		<h2 onClick={props.removeImage}>IMAGE UPLOADER</h2>
	</header>
);