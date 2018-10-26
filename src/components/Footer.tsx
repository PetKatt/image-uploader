import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

export default () => (
	<footer>
		<a
			href="https://github.com/PetKatt/image-uploader"
			title="GitHub repository">
			<FontAwesomeIcon icon={faGithub} size='3x' color='#000000' />
		</a>
		<p><em>Designed by</em> <strong>Piotr Wiercinski</strong></p>
	</footer>
);