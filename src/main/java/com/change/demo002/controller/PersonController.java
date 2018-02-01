package com.change.demo002.controller;

import com.change.demo002.dao.PersonMapper;
import com.change.demo002.entity.Rest;
import com.change.demo002.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/2/1 14:18
No such property: code for class: Script1
 * @Description:
 *
 */

@CrossOrigin
@Controller
@RequestMapping(value = "/admin")
public class PersonController {

    @Autowired
    private PersonMapper personMapper;

    @CrossOrigin
    @PostMapping("/person")
    public Rest<List<User>> person(){
        System.out.println("45");
        List<User> allUser = personMapper.selectAllUser();
        System.out.println(allUser);
        return new Rest<List<User>>(1, "查询所有注册用户", allUser);
    }
}
