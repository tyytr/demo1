import {
    ROOT_URL,
    ROOT_URLF
} from "./type";
import axios from 'axios';

function setAuthToLocalStorage(data) {
    localStorage.setItem('token', "-1");
    localStorage.setItem('userId', data.data.id); //用户ID
    localStorage.setItem('username', data.data.username); //用户登录名
    localStorage.setItem('phone', data.data.phone);//手机号
    localStorage.setItem('password', data.data.password);//密码
    localStorage.setItem('admin', data.data.admin);//管理员
    localStorage.setItem('agree', data.data.agree);//同意协议
    localStorage.setItem('loginStatus', false);//当前是否登陆
    console.log(localStorage);
}
/**
 * 注册
 */
export function singupAction(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/user/register`,
        data : data,
        dataType : "json",
        success : function (msg) {
            setAuthToLocalStorage(msg);
            console.log(msg);
            if (msg.status === "1") {
                alert(localStorage.getItem('username')+"  的注册信息已经提交，等待管理员审核！");
                // window.location.href = `${ROOT_URLF}/singin`;
            }else if (msg.status === "-1"){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singup`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singup`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
/**
 * 登录
 */
export function signinAction(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/user/login`,
        data : data,
        dataType : "json",
        success : function (msg) {
            setAuthToLocalStorage(msg);
            console.log(msg);
            if(msg.status === 2){
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('token', "2");
                alert(msg.message);
                window.location.href = `${ROOT_URLF}/home`;
            }else if (msg.status === 1) {
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('token', "1");
                alert(msg.message);
                window.location.href = `${ROOT_URLF}/home`;
            }else if (msg.status === -1){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }else if(msg.status === -2){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }else if (msg.state === -3){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }
            // localStorage.setItem('loginStatus', true);
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}



/**
 * 注册认证：认证同意
 */
export function authenticationAgree(data) {
    console.log(data);
    $.ajax({
        type : "GET",
        url : `${ROOT_URL}/admin/authentication`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                window.location.href = `${ROOT_URLF}/admin`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
/**
 * 注册认证：认证拒绝
 */
export function authenticationDisagree(data) {
    $.ajax({
        type : "GET",
        url : `${ROOT_URL}/admin/authenticationDisagree`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                window.location.href = `${ROOT_URLF}/admin`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}



/**
 * 权限管理：权限升级
 */
export function updatePerson(data) {
    $.ajax({
        type : "GET",
        url : `${ROOT_URL}/admin/updatePerson`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                window.location.href = `${ROOT_URLF}/admin`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}



/**
 * 管理员个人中心：发布公告
 */
export function adminNotice(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/admin/notice`,
        data : data,
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === "1") {
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }else if (msg.status === "-1"){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singup`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singup`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
/**
 * 注册认证：认证拒绝
 */
export function adminDeleteNotice(data) {
    $.ajax({
        type : "GET",
        url : `${ROOT_URL}/admin/adminDeleteNotice`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                window.location.href = `${ROOT_URLF}/admin`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}


/**
 * 普通用户个人中心：反馈建议
 */
export function personAdvice(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/person/advice`,
        data : data,
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === "1") {
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }else if (msg.status === "-1"){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singup`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singup`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
/**
 * 管理员个人中心：采纳建议
 */
export function adviceAgree(data) {
    console.log(data);
    $.ajax({
        type : "GET",
        url : `${ROOT_URL}/admin/adviceAgree`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                // window.location.href = `${ROOT_URLF}/admin`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
/**
 * 管理员个人中心：拒绝建议
 */
export function adviceDisagree(data) {
    console.log(data);
    $.ajax({
        type : "GET",
        url : `${ROOT_URL}/admin/adviceDisagree`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                // window.location.href = `${ROOT_URLF}/admin`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}