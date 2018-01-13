import React, {Component} from 'react';
// import Code from './code';
class SingFormUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            phone : "",
            passWord : "",
            rPassWord : "",
            isAdmin : false,
            isAgree : false,
            nameHelp : "",
            phoneHelp : "",
            wordHelp : "",
            rWordHelp : ""
        };
    }
    //username change
    changeUsername(e){
        let username = e.target.value;
        this.setState({userName : username });
        console.log(this.state.userName);
    }
    //phone change
    changePhone(e){
        let phone = e.target.value;
        this.setState({phone : phone });
        console.log(this.state.phone);
    }
    //password change
    changePassword(e){
        let password = e.target.value;
        this.setState({passWord : password });
        console.log(this.state.passWord);
    }
    //rPassword change
    changeRPassword(e){
        let rPassword = e.target.value;
        this.setState({rPassWord : rPassword });
        console.log(this.state.rPassWord);
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
    //isAgree
    handleAgree(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({isAgree: true});
        }else {
            this.setState({isAgree: false});
        }
        console.log(this.state.isAgree);
    }
    //handleClick
    handleClick(){
        if(this.state.userName === ""||this.state.userName === null){
            this.setState({nameHelp:  "* 用户名不能为空"});
            // alert(this.state.nameHelp);
        }else if(this.state.phone === ""||this.state.phone === null){
            this.setState({
                nameHelp:  " ",
                phoneHelp : "* 电话号码不能为空"
            });
        }else if(this.state.passWord === ""||this.state.passWord === null){
            this.setState({
                nameHelp:  " ",
                phoneHelp : "",
                wordHelp : "* 密码不能为空"
            });
        }else if(this.state.rPassWord === ""||this.state.passWord !== this.state.rPassWord){
            this.setState({
                nameHelp : "",
                phoneHelp : "",
                wordHelp : "",
                rWordHelp: "* 两次密码不一致"
            })
        }else {
            this.setState({ //清除提示文字
                nameHelp: "",
                phoneHelp : "",
                wordHelp: "",
                rWordHelp: ""
            });
        }
        $.ajax({
            url : 'http://localhost:8080/user/register',
            data : {
                "username" : this.state.userName,
                "password" : this.state.passWord,
                "phone" : this.state.phone,
                "admin" : this.state.isAdmin,
                "agree" : this.state.isAgree
            },
            type : 'post',
            // contentType: "application/json",
            success : function (data) {
                console.log(data);
                alert(data);
            },
            error : function (err) {
                console.log(err);
                alert(err);
            }
        });
    //    存localstorage
    //     if(this.state.isRemember===true){
    //         let loginData = {};
    //         loginData.userName = this.state.userName;
    //         loginData.userPassword = this.state.userPassword;
    //         Data.localSetItem("mm_loginStatus",loginData);
    //     }else{
    //         Data.localRemoveItem("jiaj-loginStatus");
    //     }
    //     this.props.login(this.state.userName,this.state.userPassword);
    //     console.log(this.state);
    }
    render(){
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <form className={"col-md-6 col-md-offset-3"}>
                            <h2 style={{textAlign:"center"}}>注册</h2>
                            <div className="form-group">
                                <label htmlFor="username">用户名</label>
                                <input type="text" name="username" ref="username" className="form-control" placeholder="用户名" onChange={this.changeUsername.bind(this)} />
                                <span>{this.state.nameHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputPassword1">电话</label>
                                <input type="phone" name="phone" className="form-control" placeholder="电话" onChange={this.changePhone.bind(this)} />
                                <span>{this.state.phoneHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputPassword1">密码</label>
                                <input type="password" ref="password" name="password" className="form-control" placeholder="密码" onChange={this.changePhone.bind(this)} />
                                <span>{this.state.phoneHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputPassword1">确认密码</label>
                                <input type="password" name="rpassword" className="form-control" placeholder="确认密码" onChange={this.changeRPassword.bind(this)} />
                                <span>{this.state.rWordHelp}</span>
                            </div>
                            {/*<div className="form-group">*/}
                                {/*<label className="exampleInputFile">File input</label>*/}
                                {/*<input type="file" id="exampleInputFile" />*/}
                                    {/*<p className="help-block">Example block-level help text here.</p>*/}
                            {/*</div>*/}
                            {/*<Code/>*/}
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" checked={this.state.isAdmin} onClick={this.handleAdmin.bind(this)} /><span>管理员注册</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" checked={this.state.isAgree} onClick={this.handleAgree.bind(this)} />我已阅读并同意 <a href="#">《易换网用户协议》</a>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-default" onClick={this.handleClick.bind(this,this.state)}>注册</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingFormUp;