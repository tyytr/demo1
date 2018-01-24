package com.change.demo002.controller;

import com.change.demo002.entity.User;
import com.change.demo002.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

/**
 * @Author: lijun
 * @Date: 2018/1/15 14:11
No such property: code for class: Script1
 * @Description:
 *
 */

@RestController
@RequestMapping(value = "/user")
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public User register(User user, HttpServletResponse response){
        String username = user.getUsername();
        String phone = user.getPhone();
        String password = user.getPassword();
        String rpassword = user.getRpassword();
        String admin = user.getAdmin();
        String agree = user.getAgree();
        System.out.println("username:"+username+"     phone:"+phone+"     password:"+password+"     rpassword:"+rpassword+"     admin:"+admin+"     agree:"+agree);
//        System.out.println(user);
        response.setHeader("Access-Control-Allow-Origin", "*");
        userService.insertUser(user);
        return user;
    }

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public User login(User user, HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        String username = user.getUsername();
        String password = user.getPassword();
        String admin = user.getAdmin();
        System.out.println("username:"+username+"     password:"+password+"     admin:"+admin);
        userService.loginUser(user);
        return user;
    }
}
