import * as React from 'react';

interface Props {
	onRotateSubmit: ((e: any) => void),
	degree: number,
	onRotateChange: ((e: any) => void),
	filter: string,
	onFilterChange: ((e: any) => void),
	duotoneObj: object,
	duotoneChangeHandler: ((e: any) => void)
}


export default (props: Props) => {
	const { duotoneObj, duotoneChangeHandler } = props;
	const colorsKeys: string[] = [];
	const colorsValues: number[] = [];

	for (let key in duotoneObj) {
		colorsKeys.push(key);
		colorsValues.push(duotoneObj[key]);
	}

	return (
		/* Edit Panel consists of 3 divisions: rotate, filters, duotone inputs */
		<div className="editpanel">

			<form className="editpanel__rotate" onSubmit={props.onRotateSubmit}>
				<label htmlFor="rotate">Rotate:</label>
				<input 
					type="number" 
					id="rotate"
					value={props.degree} 
					onChange={props.onRotateChange} />
				<input type="submit" value="Rotate" />
			</form>

			<div className="editpanel__filter">
	    	<label>Choose filter:</label>
	      <select value={props.filter} onChange={props.onFilterChange}>
	      	<option value="none">None</option>
	      	<option value="grayscale">Black and White</option>
	      	<option value="duotone">Duotone</option>
	        <option value="invert">Invert</option>
	        <option value="sepia">Sepia</option>
	      </select>
	    </div>

	    <fieldset className="editpanel__duotone">
		    <legend>Duotone variables:</legend>
		    { 
		    	colorsKeys.map((key, i) => {
			    	return (
			    		<label>{`${key}:  `} 
				    		<input 
				    			type="number"
				    			name={key}
				    			id={`${key}__${i}`}
				    			value={colorsValues[i]}
				    			onChange={duotoneChangeHandler} />
			    		</label>
			    	);
			    }) 
			  }
	    </fieldset>

		</div>
	);
}