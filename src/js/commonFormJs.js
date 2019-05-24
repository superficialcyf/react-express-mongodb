import React,{Component} from 'react';
import {Form,Input,Button} from 'antd';


export default class ConditionForm extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const value = this.props.value;
        this.props.form.setFieldsValue(value)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((error,values)=>{
            if(!error){
                this.props.formData.submitFun(values);
            }
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        const List = this.props.formData;
        const {TextArea } = Input;
        const submitButton = <Form.Item>
                                <Button type='Default' htmlType="submit">提交</Button>
                            </Form.Item>;
        return(
            <div id="form" style={{width:'100%'}}>
                <Form onSubmit={this.handleSubmit} layout={this.props.formData.layout}>
                    {List.formData.map((item,index,arr)=>
                        <Form.Item  key={index} label={item.label} {...item.formItemLayout}>
                            {getFieldDecorator(
                                item.name,
                                {rules:[
                                    {type:item.requiredType,message:item.requiredMessage},
                                    {required:item.required,message:item.requiredMessage}]
                                })(<TextArea onClick={item.onClick} autosize={item.autosize} readOnly={this.props.readOnly}/> )}
                        </Form.Item>)}
                        {List.submitButton?submitButton:''}
                </Form>
            </div>
        )
    }
}

