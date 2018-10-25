import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export default (props: any) => (
  <div className="image fadein">
  	<div onClick={() => (props.removeImage(props.images[0].public_id))}>
  		<FontAwesomeIcon icon={faTimesCircle} size='2x' />
  	</div>
  	<img src={props.images[0].secure_url} alt="YOUR IMAGE" />
  </div>
);