import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout,Row,Col} from 'antd';
import "../css/common.css";
import "../css/main.css"


const modulesList = [{
	name:'css篇',
	isShow:'1',
	children:[],
	path:'/cssinterview'
},{
    name:'js篇',
    isShow:'1',
    children:[],
    path:'/jsinterview'
},{
    name:'vue篇',
    isShow:'1',
    children:[],
    path:'/vueinterview'
},{
    name:'react篇',
    isShow:'1',
    children:[],
    path:'/reactinterview'
},{
    name:'http篇',
    isShow:'1',
    children:[],
    path:'/httpinterview'
}];
const {Header,Content} = Layout;
export default class childRouterPages extends Component{
	constructor(props){
		super(props);
		this.state = {
			activeModule:0
		}
		this.activeModule = this.activeModule.bind(this);
	}

    activeModule(index){
		this.setState({
            activeModule:index
		})
	}

	render(){
		return(
			<div id='routerPage'>
				<Layout>
					<Header>
						<Row>
							<Col span={8} id="modulesNav">
								{modulesList.map((item,index,arr) => <span className={`${item.isShow==='0'?'noShow':'Show'} ${this.state.activeModule===index?'topNavActive':''}`} onClick={() => this.activeModule(index)} key={index}><Link to={item.path} >{item.name}</Link></span>)}
							</Col>
						</Row>
					</Header>
					<Content>
                        {this.props.children}
					</Content>
				</Layout>
			</div>
			)
	}
}