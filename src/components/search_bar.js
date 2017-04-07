//We import react for jsx to render.Here we are saving libarry from node-modules into react
import React, { Component } from 'react'
//const Component=React.Component

//Examle of function based component.Returns jsx

// const SearchBar= () => {
// 	return <input/>;
// };


//Class component. based on ES6. Here we have render method.
//For every event, we need to attach event handler which gets triggered in case of any event on input tag.
//for fat arror, turn function arguments => function value.  arguments => expression.

class SearchBar extends Component {
	constructor(props)
	{
		super(props); //calls constructor of parent class react.conponent.
		this.state={ term: ''};
	}
	render() {
		return (
			<div>
		<input value={this.state.term} onChange={event => this.setState({ term :event.target.value}) }/>

			</div>

			);
		// return <input onChange={ event => console.log(event)} />;
	};

	
}
//in react, state captures user events. state is only available for class based event. Whenever class searchBar state changes, it will forces component to render again therby changing theier state.
//State is nothing but an object which has a property term which gets updated when event occurs. State object needs to be intialized in class's constaructor.
//Constructor is the function when class instance is created.





// class SearchBar extends Component {
// 	render() {
// 		return <input onChange={this.onInputChange} />;
// 	}

// 	onInputChange(event)
// 	{
// 		console.log(event);
// 	}
// }

//HTMl's in js here is jsx. When is is transiled in babel, it creates react.createElement. 

//to use SearchBar in main index.js, it needs to be exported. this makes Searchbar componet accessible from whichever fles which imports it.

export default SearchBar;

