import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom';
import History from '../systemSetting/historyMannagemtn';
import Customzation from '../systemSetting/systemCoustomzation';
import Modules from '../systemSetting/systemModulesManagement';

export default class Sys extends Component{

    componentDidMount() {
        this.changeRoute(this.props);
    }
    changeRoute = (props)=>{
    }

    render (){
        return (
            <div>
                <Router>
                    <nav>
                        <span><Link to="/orgSetting/org1">设置1</Link></span>
                        <span><Link to="/orgSetting/org2">设置2</Link></span>
                        <span><Link to="/orgSetting/org3">设置3</Link></span>
                    </nav>
                    <section>
                        <Route path="/orgSetting/org1" component={History}/>
                        <Route path="/orgSetting/org2" component={Customzation}/>
                        <Route path="/orgSetting/org3" component={Modules}/>
                    </section>
                </Router>
            </div>
        )
    }
}