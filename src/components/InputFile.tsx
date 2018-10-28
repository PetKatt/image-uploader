import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

interface Props {
	onChange: ((e: any) => void)
}


export default (props: Props) => (
	<div className="input fadein" role="input">
		<label htmlFor="fileInput">
	    <FontAwesomeIcon icon={faFileImage} size="10x" color="#824BA8" />
	  </label>
		<input type="file" id="fileInput" onChange={props.onChange} aria-placeholder="upload-your-image" />
	</div>
);