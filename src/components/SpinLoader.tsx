import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';


export default () => (
  <div className='spinner rotate'>
    <FontAwesomeIcon icon={faBomb} size='5x' color='#1D3C4C' />
  </div>
 );