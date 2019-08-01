import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Blog from './Blog';
import NavBar from './NavBar';

class DebugRouter extends Router {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=>{
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
    });
  }
}

export default class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <DebugRouter>
                        <div>
                            <NavBar />
                            <div className="container">
                                <Route path="/" exact component={Home}/>
                                <Route path="/about" exact component={About}/>
                                <Route path="/blog" exact component={Blog}/>
                                <Route path="/login" exact component={Login}/>
                            </div>
                        </div>
                    </DebugRouter>
                </div>
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
