import * as React from 'react';

export default (props: any) => (
	<div className="editpanel">
		<form className="editpanel__rotate" onSubmit={props.onRotateSubmit}>
			<label htmlFor="rotate">Rotate:</label>
			<input 
				type="number" 
				id="rotate"
				value={props.degree} 
				onChange={props.onRotateChange}
				placeholder="Enter rotation degree..." />
			<input type="submit" value="Rotate" />
		</form>

		{/*<button onClick={props.onClick}>Black&amp;White</button>*/}

		<form className="editpanel__filter">
    	<label>Choose filter:</label>
      <select value={props.filter} onChange={props.onFilterChange}>
      	<option value="none">None</option>
        <option value="blur">Blur</option>
        <option value="sepia">Sepia</option>
        <option value="bw">Black and White</option>
      </select>
    </form>
	</div>
);