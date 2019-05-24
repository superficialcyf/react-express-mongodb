import React,{Component} from 'react';
import {Drawer, Table,Button,Popconfirm, message,Modal,Form} from 'antd';
import {Post,Get} from '../js/commonFetchJs'
import ConditionForm from '../js/commonFormJs'


export default class CommonTable extends Component{
    constructor(props){
        super(props);
        this.state={
          visible:false,
          showModal:false,
          checkedId:'',
          title:'',
          code:'',
          word:'',
          isEdit:false,
          confirmLoading:false,
          tableValue:[]
        }
        this.onClose = this.onClose.bind(this)
        this.handAdd = this.handAdd.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel =  this.handleCancel.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(values){
       let pathName = this.props.pathname.replace('/','');
       let url = '';
       switch (pathName) {
            case 'cssinterview':url = '/interview/addOrEditcss';values['type'] = 'css';break;
            case 'jsinterview':url = '/interview/addOrEdijs';values['type'] = 'js';break;
            case 'vueinterview':url = '/interview/addOrEdivue';values['type'] = 'vue';break;
            case 'reactinterview':url = '/interview/addOrEdireact';values['type'] = 'react';break;
            case 'httpinterview':url = '/interview/addOrEdihttp';values['type'] = 'http';break;
            default:break;
       }
       Post(
        url,
        values,
        (data)=>{
          message.success(data[0].msg);
        },
        (error)=>{
          message.error(error);
        }
       )
    }
    handleLook(record){
      this.setState({
        title:record.title,
        code:record.code,
        word:record.word,
        showModal:true,
        tableValue:record
      })
    }
    handleEdit(record){
      this.setState({
        title:record.title,
        code:record.code,
        word:record.word,
        isEdit:true,
        showModal:true,
        tableValue:record
      })
    }
    handAdd(){
        this.setState({
          visible:true
        })
    }
    onClose(){
      this.setState({
        visible:false
      })
    }
    confirm(){
      message.info(this.state.checkedId)
      this.setState({
        checkedId:''
      })
    }
    handleOk(){
      const isEdit = this.state.isEdit;
      if(isEdit){
        this.setState({
          confirmLoading:true
        })
        setTimeout(()=>{
          this.setState({
            isEdit:false,
            showModal:false,
            confirmLoading:false
          })
        },2000)
      }else{
        this.setState({
          isEdit:false,
          showModal:false
        })
      }
    }
    handleCancel(){
      this.setState({
        isEdit:false,
        showModal:false
      })
    }

    render(){
        const tableColumns=[{
            title: 'question',
            dataIndex: 'question',
            width: 800,
            render: (text,record) => <a href="javascript:;" onClick={()=>this.handleLook(record)}>{text}</a>,
            align:'left'
          }, {
            title: 'time',
            dataIndex: 'time',
            width: 150,
            align:'center'
          }, {
            title: 'Action',
            width: 250,
            render: (text, record) => (
            <div className="caozuo">
              <Popconfirm placement="topLeft" title="are you sure to delete?" onConfirm={this.confirm.bind(this)} okText="Yes" cancelText="No">
                <Button type='default' size="small" onClick={()=>{
                  console.log(record)
                  let key = record._id;
                  this.setState({
                    checkedId:key
                  })
                }}>delete</Button>
              </Popconfirm>
              <Button type='default' size="small" onClick={()=>this.handleEdit(record)}>edit</Button>
            </div>
            ),
            align:'center'
          }];
        
        const tableConfig={
              bordered:true,
              pagination:false,
              title:()=><Button type="default" size="small" onClick={this.handAdd}>新增</Button>,
              showHeader:true,
              footer:undefined,
              rowSelection:{},
              scroll:{y:700},
              rowSelection:{}
          }

        const formListData={
          submitFun:this.handleSubmit,
          submitButton:true,
          formData:[
            {
                label:'question',
                required:true,
                requiredType:'',
                requiredMessage:'Please input your Question!',
                name:'question',
                readOnly:false,
                formItemLayout:{
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 3 },
                        },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 21 },
                        },
                },
                autosize:{minRows: 6}
            },
            {
                label:'code',
                required:false,
                requiredType:'',
                name:'code',
                readOnly:false,
                formItemLayout:{
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span:3 },
                        },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 21 },
                        },
                },
                autosize:{minRows: 9}
            },
            {
              label:'word',
              required:false,
              requiredType:'',
              name:'word',
              readOnly:false,
              formItemLayout:{
                  labelCol: {
                      xs: { span: 24 },
                      sm: { span: 3 },
                      },
                  wrapperCol: {
                      xs: { span: 24 },
                      sm: { span: 21 },
                      },
              },
              autosize:{minRows: 9},
          }]};

        const editFormListData = {
          submitFun:this.handleSubmit,
          submitButton:false,
          formData:[
            {
                label:'Question',
                required:true,
                requiredType:'',
                requiredMessage:'Question is must be input!',
                name:'question',
                readOnly:false,
                formItemLayout:{
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 2 },
                        },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 21 },
                        },
                },
                autosize:{minRows:3}
            },
            {
                label:'Code',
                required:false,
                requiredType:'',
                name:'code',
                readOnly:false,
                formItemLayout:{
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 2 },
                        },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 21 },
                        }
                },
                autosize:{minRows:8}
            },
            {
              label:'Word',
              required:false,
              requiredType:'',
              name:'word',
              readOnly:false,
              formItemLayout:{
                  labelCol: {
                      xs: { span: 24 },
                      sm: { span: 2 },
                      },
                  wrapperCol: {
                      xs: { span: 24 },
                      sm: { span: 21 },
                      },
              },
            autosize:{minRows: 8}
        }]};

        const DictItemForm = Form.create({name:'dictItem'})(ConditionForm);
         
        return(
            <div className="TableComponent">
                <Table {...tableConfig} dataSource={this.props.data===undefined ? null : this.props.data} columns={tableColumns}></Table>
                <Drawer
                 title="add a new interview"
                 width={720}
                 onClose={this.onClose}
                 visible={this.state.visible}
                    >
                    <DictItemForm formData={formListData}/>
                </Drawer>
                <Modal
                  title={this.state.title}
                  visible={this.state.showModal}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  width={1200}
                  confirmLoading={this.state.confirmLoading}
                >
                  <div className="addNewQuestion">
                    <DictItemForm formData={editFormListData} readOnly={!this.state.isEdit} value={this.state.tableValue}/>
                  </div>
                </Modal>
            </div>
        )
    }
}