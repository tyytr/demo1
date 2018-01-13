/**
 * Created by fengxiaoli on 2017/12/12.
 */
import React, { Component } from 'react';
import Sing from './sing/sing';
import SingFormUp from './sing/singFormUp';
import axios from 'axios';
import {
    ROOT_URL
} from "../../actions/type";

class Singup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }
    render(){
        return(
            <div>
                <Sing/>
                <SingFormUp/>
            </div>
        );
    }
    // register(){
    //     console.log("进入注册函数");
    //     // console.log(this.refs);
    //     let username = this.refs.username.value;
    //     let password = this.refs.password.value;
    //     var userInfo = {
    //         username: username,
    //         password: password
    //     }
    //     // console.log(userInfo);
    //     $.ajax("http://localhost:3000/users/addUser",{
    //         data: {
    //             username: username,
    //             'password': password  //password不加引号显示像一个关键字，所以就嘿嘿……
    //         },
    //         dataType: 'json',
    //         type: 'post',
    //         success: function(data){
    //             console.log(data.msg);
    //         },
    //         error: function(xhr, type, errerThrown){
    //
    //         }
    //     });
    //     // $.ajax({
    //     //     url: "http://localhost:3000/users/addUser",
    //     //     data: userInfo,
    //     //     // async: false,
    //     //     type: "GET",
    //     //     headers: {
    //     //         Accept: "application/json; charset=utf-8"
    //     //     },
    //     //     // header:"Access-Control-Allow-Origin:*",
    //     //     dataType: 'jsonp',
    //     //     success:function (data) {
    //     //         debugger;
    //     //         alert(data);
    //     //         alert("success");
    //     //         console.log(data);
    //     //
    //     //         // console.log(status);
    //     //
    //     //         // console.log("soloss");
    //     //     },
    //     //     error:function(er){
    //     //         // var er = JSON.decode(er);
    //     //         alert(er);
    //     //         alert("error");
    //     //         console.log(error);
    //     //         alert(error);
    //     //         debugger;
    //     //         // console.log(er);
    //     //         // BackErr(er);
    //     //     }
    //     // });
    //     // console.log(username+password);
    // }
    // render() {
    //     return (
    //         <div>
    //             <form >
    //                 <input type="text" name="username" placeholder={"名字"} ref={"username"}/>
    //                 <input type="text" name="password" placeholder={"密码"} ref={"password"}/>
    //                 <input type="submit" onClick={this.register.bind(this)}/>
    //             </form>
    //             {/*<form action={"http://localhost:3000/users/addUser"} method={"get"} >*/}
    //                 {/*<input type="text" name="username" placeholder={"名字"} ref={"username"}/>*/}
    //                 {/*<input type="text" name="password" placeholder={"密码"} ref={"password"}/>*/}
    //                 {/*<input type="submit" onClick={this.register.bind(this)}/>*/}
    //             {/*</form>*/}
    //         </div>
    //     );
    // }
}
export default Singup;






