import React,{Component} from 'react';
import { Input ,Button ,Table, Divider} from 'antd';
import 'antd/dist/antd.css';
import { adminNotice} from "../actions/auth";

class AdminHandleNoticePublish extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleAdvice(e){
        this.setState({notice: e.target.value});
        console.log(this.state.notice);
    }
    adminNotice(){
        const myDate = new Date();
        const token = localStorage.getItem('token');
        const loginStatus = localStorage.getItem('loginStatus');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        const notice = this.state.notice;
        const time = myDate.toLocaleString();
        const data = {
            "id" : userId,
            "username" : username,
            "notice" : notice,
            "time" : time
        };
        if (token === "2" && loginStatus === "true" && notice !== null){
            // console.log(data);
            adminNotice(data);
        }
        else {
            alert("发布公告内容为空，请合适重新提交");
        }
    }

    render(){
        return (
            <div className={"col-xs-12"}>
                <form action=""  style={{textAlign:"center"}}>
                    <Input.TextArea placeholder="发布系统公告（40字以内）" autosize={{minRows: 4}} maxLength={"40"} onChange={this.handleAdvice.bind(this)}/>
                    <Button type="primary" size={"large"} onClick={this.adminNotice.bind(this)} >发布公告</Button>
                </form>
            </div>
        )
    }
}
export default AdminHandleNoticePublish;