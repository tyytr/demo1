package com.change.demo002.controller;

import com.change.demo002.entity.Rest;
import com.change.demo002.entity.User;
import com.change.demo002.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * @Author: lijun
 * @Date: 2018/1/15 14:11-
No such property: code for class: Script1
 * @Description:用户
 *
 */

@CrossOrigin
@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:50
    No such property: code for class: Script1
     * @Description:用户：注册
     *
     */
    @CrossOrigin
    @PostMapping("/register")
    public Rest<User> register(User user){
//        System.out.println(user.getUsername());
        int userInsertStatus = userService.userInsert(user);

        if (userInsertStatus == 0){
            return new Rest<User>(-1,"该用户名已经注册，请重新注册",user);
        }else if (userInsertStatus == 1){
            return new Rest<User>(1,"注册信息提交成功，等待管理员认证注册",user);
        }else{
            return new Rest<User>(0,"未知原因注册失败，稍后再试",user);
        }
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:51
    No such property: code for class: Script1
     * @Description:用户：登录
     *
     */
    @PostMapping("/login")
    public Rest<User> login(User user){
//        System.out.println(user.getUsername());
        int userLoginStatus = userService.userSelect(user);
//        根据用户名查询用户所有信息
        User user1 = userService.selectUser(user);
        if ( userLoginStatus == -3){
            return new Rest<User>(-3, "管理员正在认证注册信息，请稍后登录",user1);
        }else if (userLoginStatus == -2){
            return new Rest<User>(-2,"用户尚未注册，请先注册在登录",user);
        }else if (userLoginStatus == -1) {
            return new Rest<User>(-1,"用户名或者密码错误",user1);
        }else if (userLoginStatus == 1) {
            return new Rest<User>( 1,"普通用户登录成功",user1);
        }else if (userLoginStatus == 2){
            return new Rest<User>( 2,"管理员用户登录成功",user1);
        }else {
            return new Rest<User>( 0, "未知原因登录失败，稍后再试",user);
        }
    }
}
