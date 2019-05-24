import React,{Component} from 'react'
import CommonTable from '../js/commonTableJs';
import {Post,Get} from '../js/commonFetchJs'
import '../css/common.css'
import '../css/interview.css'


class Interview extends Component{
    constructor(props){
        super(props)
        this.state = {
            tableData:[]
        }
    }

    componentDidMount(){
        let pathName = this.props.location.pathname.replace('/','');
        Get(
            '/interview/searchInterview',{type:pathName},
            (data)=>{
                console.log();
                this.setState({
                    tableData:data
                })
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    render(){
        return(
            <div id="cssInterview">
                 <CommonTable data={this.state.tableData} pathname={this.props.location.pathname}/>
            </div>
        )
    }
}
export default Interview;