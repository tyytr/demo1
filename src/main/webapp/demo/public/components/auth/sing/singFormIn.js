import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
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
    //isRemember password
    handlePassword(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({isRemember: true});
        }else {
            this.setState({isRemember: false});
        }
        console.log(this.state.isRemember);
    }
    //isAdmin
    handleAdmin(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({isAdmin: true});
        }else {
            this.setState({isAdmin: false});
        }
        console.log(this.state.isAdmin);
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
        // const { getFieldDecorator } = this.props.form;
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        {/*<Form onSubmit={this.handleSubmit} className="login-form">*/}
                            {/*<Form.Item >*/}
                                {/*{getFieldDecorator('userName', {*/}
                                    {/*rules: [{ required: true, message: 'Please input your username!' }],*/}
                                {/*})(*/}
                                    {/*<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />*/}
                                {/*)}*/}
                            {/*</Form.Item>*/}
                            {/*<Form.Item>*/}
                                {/*{getFieldDecorator('password', {*/}
                                    {/*rules: [{ required: true, message: 'Please input your Password!' }],*/}
                                {/*})(*/}
                                    {/*<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />*/}
                                {/*)}*/}
                            {/*</Form.Item>*/}
                            {/*<Form.Item>*/}
                                {/*{getFieldDecorator('remember', {*/}
                                    {/*valuePropName: 'checked',*/}
                                    {/*initialValue: true,*/}
                                {/*})(*/}
                                    {/*<Checkbox>Remember me</Checkbox>*/}
                                {/*)}*/}
                                {/*<a className="login-form-forgot" href="">Forgot password</a>*/}
                                {/*<Button type="primary" htmlType="submit" className="login-form-button">*/}
                                    {/*Log in*/}
                                {/*</Button>*/}
                                {/*Or <a href="">register now!</a>*/}
                            {/*</Form.Item>*/}
                        {/*</Form>*/}
                        <form className={"col-md-6 col-md-offset-3"}>
                            <h2 style={{textAlign:"center"}}>登陆</h2>
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
                            {/*<div className="checkbox">*/}
                                {/*<label>*/}
                                    {/*<input type="checkbox" checked={this.state.isRemember} onClick={this.handlePassword.bind(this)} />*/}
                                    {/*<span>记住密码</span>*/}
                                {/*</label>*/}
                            {/*</div>*/}
                            {/*<div className="checkbox">*/}
                                {/*<label>*/}
                                    {/*<input type="checkbox" checked={this.state.isAdmin} onClick={this.handleAdmin.bind(this)} />*/}
                                    {/*<span>管理员登陆</span>*/}
                                {/*</label>*/}
                            {/*</div>*/}
                            <button type="button" className="btn btn-default" onClick={this.handleClick.bind(this)}>登陆</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
// const SingFormIn = Form.create()(SingFormIn1);
export default SingFormIn;