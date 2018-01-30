import {
    ROOT_URL,
    ROOT_URLF
} from "./type";

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
                alert("恭喜用户  "+localStorage.getItem('username')+"  注册成功，快点登陆吧！");
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
                // window.location.href = `${ROOT_URLF}/home`;
            }else if (msg.status === 1) {
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('token', "1");
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/home`;
            }else if (msg.status === -1){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }else if(msg.status === -2){
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

