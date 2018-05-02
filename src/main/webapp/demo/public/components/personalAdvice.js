import React,{Component} from 'react';
import { Input ,Button} from 'antd';
import 'antd/dist/antd.css';
import {personAdvice} from "../actions/auth";

class PersonalAdvice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            advice : "",
            agree : "false",
            disagree : "false"
        };
    }
    handleAdvice(e){
        this.setState({advice: e.target.value});
        console.log(this.state.advice);
    }
    personAdvice(){
        const myDate = new Date();
        const token = localStorage.getItem('token');
        const loginStatus = localStorage.getItem('loginStatus');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        const advice = this.state.advice;
        const time = myDate.toLocaleString();
        const data = {
            "id" : userId,
            "username" : username,
            "advice" : advice,
            "agree" : this.state.agree,
            "disagree" : this.state.disagree,
            "time" : time
        };
        if (token === "1" && loginStatus === "true" && advice !== null){
            // console.log(data);
            personAdvice(data);
        }
        else {
            alert("反馈建议内容为空，请核实重新提交");
        }

    }

    render(){
        return (
            <div className={"col-xs-12"} style={{textAlign:"center"}}>
                <h3 className={"g-py-20"}>我们期待您的反馈与建议</h3>
                <form action="">
                    <Input.TextArea placeholder="期待您留下反馈与建议（40字以内）" autosize={{minRows: 4}} maxLength={"40"} onChange={this.handleAdvice.bind(this)}/>
                    <Button type="primary" size={"large"} onClick={this.personAdvice.bind(this)} >发布建议</Button>
                </form>
            </div>
        )
    }
}
export default PersonalAdvice;