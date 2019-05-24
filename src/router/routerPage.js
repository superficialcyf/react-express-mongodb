import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainMenu from './mainMenu';
import Interview from '../pages/interview'


export default class RouterPage extends Component{
	render(){
		return(
			<Router>
				<MainMenu>
					<Route path="/cssinterview" component={Interview}/>
					<Route path="/jsinterview" component={Interview}/>
					<Route path="/vueinterview" component={Interview}/>
					<Route path="/reactinterview" component={Interview}/>
					<Route path="/httpinterview" component={Interview}/>
				</MainMenu>
			</Router>
			)
	}
}
