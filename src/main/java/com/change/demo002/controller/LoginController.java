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
 * @Description:
 *
 */

@CrossOrigin
@RestController
@RequestMapping(value = "/user")
public class LoginController {

    @Autowired
    private UserService userService;


    @CrossOrigin
    @PostMapping("/register")
    public Rest<User> register(User user){
//        @RequestBody User user

        System.out.println(user.getUsername());
        int userInsertStatus = userService.userInsert(user);

        if (userInsertStatus == 0){
            return new Rest<User>(-1,"该用户名已经注册，请重新注册",user);
        }else if (userInsertStatus == 1){
            return new Rest<User>(1,"注册成功",user);
        }else{
            return new Rest<User>(0,"未知原因注册失败，稍后再试",user);
        }
    }

    @PostMapping("/login")
    public Rest<User> login(User user){
        System.out.println(user.getUsername());
        int userLoginStatus = userService.userSelect(user);
//        根据用户名查询用户所有信息
        user = userService.selectUser(user);
        if (userLoginStatus == -2){
            return new Rest<User>(-2,"用户尚未注册，请先注册在登陆",user);
        }else if (userLoginStatus == -1) {
            return new Rest<User>(-1,"用户名或者密码错误",user);
        }else if (userLoginStatus == 1) {
            return new Rest<User>( 1,"普通用户登陆成功",user);
        }else if (userLoginStatus == 2){
            return new Rest<User>( 2,"管理员用户登陆成功",user);
        }else {
            return new Rest<User>( 0, "未知原因登陆失败，稍后再试",user);
        }
    }
}
