import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
  	<div>
	    <img
	      src={spinner}
	      style={{ width: '200px', margin: 'auto', display: 'block' }}
	      alt='Loading'
	    /><h1><center>Loading...</center></h1>
    </div>
  )
}

export default Spinner;
