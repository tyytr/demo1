import React,{Component} from 'react';
import { Input ,Button} from 'antd';
import 'antd/dist/antd.css';
import {personAdvice} from "../actions/auth";

class PersonalAdvice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // status : "disabled",
            advice : "",
            agree : "false",
            disagree : "false"
        };
    }
    // componentWillMount(){
    //     const token = localStorage.getItem('token');
    //     const loginStatus = localStorage.getItem('loginStatus');
    //     if (token === 1 && loginStatus === "true"){
    //         this.setState({status: ""});
    //     }
    // }
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
        if (token === "1" && loginStatus === "true"){
            // console.log(data);
            personAdvice(data);
        }

    }

    render(){
        return (
            <div className={"col-xs-12"} style={{textAlign:"center"}}>
                <h3 className={"g-py-20"}>我们期待您的反馈与建议</h3>
                <form action="">
                    <Input.TextArea placeholder="期待您留下反馈与建议（100字以内）" autosize={{minRows: 4}} maxLength={"100"} onChange={this.handleAdvice.bind(this)}/>
                    <Button type="primary" size={"large"} onClick={this.personAdvice.bind(this)} >发布建议</Button>
                </form>
            </div>
        )
    }
}
export default PersonalAdvice;