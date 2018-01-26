
function setAuthToLocalStorage(data) {
    // localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.id); //用户ID
    localStorage.setItem('loginname', data.username); //用户登录名
    localStorage.setItem('mobilephone', data.phone);//手机号
    console.log(localStorage);
}
export function singupAction(data) {
    console.log(data);
        // console.log("1");
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/user/register",
            data : data,
            dataType : "json",
            success : function (msg) {
                setAuthToLocalStorage(msg);
                console.log("success");
                console.log(msg);
                // alert("error:"+msg);
                // if (msg) {//根据返回值进行跳转
                //     window.location.href = 'http://localhost:8081/singup';
                // }
            },
            error : function (err) {
                console.log(err);
                alert(err);
            }
        });
}
/**
 * 手机登录
 */
export function signinAction(data) {
    console.log(data);
    return function () {
        $.ajax({
            url : 'http://localhost:8080/user/login',
            data : data,
            type : 'post',
            success : function (msg) {
                // setAuthToLocalStorage(msg);
                console.log("success");
                console.log(msg);
                alert(msg);
            },
            error : function (err) {
                console.log(err);
                alert(err);
            }
        });
    };
}

