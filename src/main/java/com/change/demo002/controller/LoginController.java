package com.change.demo002.controller;

import com.change.demo002.entity.User;
import com.change.demo002.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletRegistration;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/user")
public class LoginController {

    @Autowired
    private UserService userServiceImpl;

    @RequestMapping(value = "/register")
    public String register(User user, HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        String username = user.getUsername();
        String password = user.getPassword();
        String phone = user.getPhone();
        String admin = user.getAdmin();
        String agree = user.getAgree();
        System.out.println(user);
        userServiceImpl.findUser(user);
        return "register";
    }

    @RequestMapping(value = "/login")
    public String login(User user, HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        String username = user.getUsername();
        String password = user.getPassword();
        String admin = user.getAdmin();
        String remember = user.getRemember();
        return "login";
    }
}
