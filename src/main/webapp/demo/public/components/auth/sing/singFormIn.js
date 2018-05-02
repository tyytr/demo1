import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {signinAction} from '../../../actions/auth';

class SingFormIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            passWord : "",
            isRemember : false,
            isAdmin : "false",
            nameHelp : "",
            wordHelp : ""
        };
    }
    //username change
    changeUsername(e){
        let username = e.target.value;
        this.setState({userName:username});
        console.log(this.state.userName);
    }
    //password change
    changePassword(e){
        let password = e.target.value;
        this.setState({passWord : password });
        console.log(this.state.passWord);
    }
    handleClick() {
        const data = {
            "username" : this.state.userName,
            "password" : this.state.passWord,
            // "remember" : this.state.isRemember,
            "admin" : this.state.isAdmin
        };
        if (this.state.userName === "" || this.state.userName === null) {
            this.setState({nameHelp: "* 用户名不能为空"});
            // alert(this.state.nameHelp);
        } else if (this.state.passWord === "" || this.state.passWord === null) {
            this.setState({
                nameHelp: " ",
                wordHelp: "* 密码不能为空"
            });
        }else {
            this.setState({ //清除提示文字
                nameHelp: "",
                wordHelp: ""
            });
            signinAction(data);
            // console.log(localStorage);
        }
    }
    render(){
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <form className={"col-md-6 col-md-offset-3"}>
                            <h2 style={{textAlign:"center"}}>登录</h2>
                            <div className="form-group">
                                <label htmlFor="username">用户名</label>
                                <input type="text" name="username" ref="username" className="form-control" placeholder="用户名" onChange={this.changeUsername.bind(this)} />
                                <span>{this.state.nameHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputPassword1">密码</label>
                                <input type="password" ref="password" name="password" className="form-control" placeholder="密码" onChange={this.changePassword.bind(this)} />
                                <span>{this.state.wordHelp}</span>
                            </div>
                            <button type="button" className="btn btn-default" onClick={this.handleClick.bind(this)}>登录</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingFormIn;