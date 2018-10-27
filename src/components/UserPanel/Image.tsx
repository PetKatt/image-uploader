import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

interface Props {
	images: any[],
	removeImage: (() => void)
}


export default (props: Props) => (
  <div className="image fadein">
  	<div onClick={props.removeImage}>
  		<FontAwesomeIcon icon={faSkullCrossbones} size='2x' />
  	</div>
  	<img src={props.images[0].secure_url} alt="YOUR IMAGE" />
  </div>
);