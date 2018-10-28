import * as React from 'react';

interface Props {
	onRotateSubmit: ((e: any) => void),
	degree: number,
	onRotateChange: ((e: any) => void),
	filter: string,
	onFilterChange: ((e: any) => void),
	duotoneObj: object,
	duotoneChangeHandler: ((e: any) => void),
	disabled: boolean
}


export default (props: Props) => {
	const { onRotateSubmit, degree, onRotateChange, filter, onFilterChange, duotoneObj, duotoneChangeHandler, disabled } = props;
	const colorsKeys: string[] = [];
	const colorsValues: number[] = [];

	for (let key in duotoneObj) {
		colorsKeys.push(key);
		colorsValues.push(duotoneObj[key]);
	}

	return (
		/* Edit Panel consists of 3 panels: rotate, filters, duotone filters */
		<div className="editpanel" role="edit">

			<form className="editpanel__rotate" onSubmit={onRotateSubmit} role="rotate">
				<label htmlFor="rotate">Rotate:</label>
				<input 
					type="number" 
					id="rotate"
					value={degree} 
					onChange={onRotateChange}
					required />
				<input type="submit" value="Rotate" />
			</form>

			<div className="editpanel__filter" role="filter">
	    	<label>Choose filter:</label>
	      <select value={filter} onChange={onFilterChange}>
	      	<option value="none">None</option>
	      	<option value="grayscale">Black and White</option>
	      	<option value="duotone">Duotone</option>
	        <option value="invert">Invert</option>
	        <option value="sepia">Sepia</option>
	      </select>
	    </div>

	    <fieldset className="editpanel__duotone" role="tune" disabled={disabled}>
		    <legend>Duotone variables:</legend>
		    { 
		    	colorsKeys.map((key, i) => {
			    	return (
			    		<label key={`${key}__${i}`} htmlFor={key}>
			    			{/*{`${key}: `}*/} 
				    		<input 
				    			type="range"
				    			name={key}
				    			id={key}
				    			value={colorsValues[i]}
				    			onChange={duotoneChangeHandler}
				    			min={0}
				    			max={256}
				    			step={1} />
				    		<span>{colorsValues[i]}</span>
			    		</label>
			    	);
			    }) 
			  }
	    </fieldset>

		</div>
	);
}