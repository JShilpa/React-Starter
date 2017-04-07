//to build componets we need react library. bUt to insert the component in DOM, we use dom library.
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import Search from './components/search_bar';
// For user-defined components, we have to specify path unlike library like react and react-dom.Here, SearchBar component is stored in Search.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyBlZpcybxRzkUE1aqz0gmdxCHJDDMax0qQ';

//STEP 1: Component is nothing but javascript functions which produces HTMl's
//here const is ES6 concept. It is just another way of declaring variable but its value wont ever change. It's an constant now.
//We cannot redefine value for App now

// const App= function() {
// 	return <div>Hi there</div>;
// }

//Another way of declaring function in ES6. Remove function keyword and put an fat arrow key.

// 	YTSearch({term: 'chess', 'key':API_KEY}, function(data){
// 		console.log(data);
// });

class App extends Component{

	constructor(props){
		super(props);
		this.state={ videos:[], selectedVideo: null };

		//here videos is a callback function. In ES^, if keys and values have same term , we cab use just that term

		YTSearch({ term: 'chess', 'key': API_KEY }, (videos) => {
				this.setState( { 
				videos:videos,
				selectedVideo:videos[0]
				} );
		//this.setState( { videos: data});
});

	}

	render()
	{
		return(
			<div>

				<Search />
					<VideoDetail video={this.state.selectedVideo} />
				<VideoList  videos={this.state.videos} />
				</div>

			);
	}

}
// const App= () => {
// 	return (
// 	<div>
// 	<Search/>

// 	</div>
// 	);
// };

//Step 2: Create instance of JSX. Here app is the class of the componet. While we render it in DM, we have t create an instance of it.To create an instance, wrap it with jsx tag 
//Step 3: Put this component in the DOM

//ReactDOM.render('App'); gave class and instance error

//JSX is subset of javascript. Second params is the target where we want to render our component

ReactDOM.render(<App />, document.querySelector('.container'));


