import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

export default (props: any) => (
	<div className="loader fadein">
		<label htmlFor="fileInput">
	    <FontAwesomeIcon icon={faFileImage} size="10x" color="#824BA8" />
	  </label>
		<input type="file" id="fileInput" onChange={props.onChange} />
	</div>
);