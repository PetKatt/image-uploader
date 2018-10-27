import * as React from 'react';

interface Props {
	onRotateSubmit: ((e: any) => void),
	degree: number,
	onRotateChange: ((e: any) => void),
	filter: string,
	onFilterChange: ((e: any) => void),
	colorOneRed: number,
	colorOneGreen: number,
	colorOneBlue: number,
	colorTwoRed: number,
	colorTwoGreen: number,
	colorTwoBlue: number,
	colorOneRedChange: ((e: any) => void),
	colorOneGreenChange: ((e: any) => void),
	colorOneBlueChange: ((e: any) => void),
	colorTwoRedChange: ((e: any) => void),
	colorTwoGreenChange: ((e: any) => void),
	colorTwoBlueChange: ((e: any) => void)
}


export default (props: Props) => (
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
    	<label>ColorOne RED</label><input 
				type="number" 
				id="colorOneRed"
				value={props.colorOneRed} 
				onChange={props.colorOneRedChange} />
			<label>ColorOne RED</label><input 
				type="number" 
				id="colorOneGreen"
				value={props.colorOneGreen} 
				onChange={props.colorOneGreenChange} />
			<label>ColorOne RED</label><input 
				type="number" 
				id="colorOneBlue"
				value={props.colorOneBlue} 
				onChange={props.colorOneBlueChange} />
			<label>ColorOne RED</label><input 
				type="number" 
				id="colorTwoRed"
				value={props.colorTwoRed} 
				onChange={props.colorTwoRedChange} />
			<label>ColorOne RED</label><input 
				type="number" 
				id="colorTwoGreen"
				value={props.colorTwoGreen} 
				onChange={props.colorTwoGreenChange} />
			<label>ColorOne RED</label><input 
				type="number" 
				id="colorTwoBlue"
				value={props.colorTwoBlue} 
				onChange={props.colorTwoBlueChange} />
    </fieldset>
	</div>
);