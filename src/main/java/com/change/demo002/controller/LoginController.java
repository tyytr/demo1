package com.change.demo002.controller;

import com.change.demo002.entity.Rest;
import com.change.demo002.entity.User;
import com.change.demo002.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
        int b = userService.insert(user);

        if (b == 0){
            return new Rest<User>(-1,"用户名重复",null);
        }else if (b == 1){
            return new Rest<User>(1,"插入成功",user);
        }else{
            return new Rest<User>(-1,"未知原因插入失败，稍后再试",null);
        }
    }

}
