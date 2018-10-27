import * as React from 'react';

interface Props {
	onRotateSubmit: ((e: any) => void),
	degree: number,
	onRotateChange: ((e: any) => void),
	filter: string,
	onFilterChange: ((e: any) => void),
	duotoneObj: object,
	duotoneObjChange: object
}


export default (props: Props) => {
	const { duotoneObj, duotoneObjChange } = props;
	const colorsKeys: string[] = [];
	const colorsValues: number[] = [];
	const duotoneHandlers: any[] = [];

	for (let key in duotoneObj) {
		colorsKeys.push(key);
		colorsValues.push(duotoneObj[key]);
	}

	for (let key in duotoneObjChange) {
		duotoneHandlers.push(duotoneObjChange[key]);
	}

	return (
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

			<form className="editpanel__filter">
	    	<label>Choose filter:</label>
	      <select value={props.filter} onChange={props.onFilterChange}>
	      	<option value="grayscale">Black and White</option>
	      	<option value="duotone">Duotone</option>
	        <option value="invert">Invert</option>
	        <option value="sepia">Sepia</option>
	      </select>
	    </form>

	    <fieldset>
	    <legend>Duotone variables:</legend>
	    { 
	    	colorsKeys.map((key, i) => {
		    	return (
		    		<label>{`${key}:  `} 
			    		<input 
			    			type="number"
			    			id={`${key}__${i}`}
			    			value={colorsValues[i]}
			    			onChange={duotoneHandlers[i]} />
		    		</label>
		    	);
		    }) 
		  }
	    </fieldset>
		</div>
	);
}