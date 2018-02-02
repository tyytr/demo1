package com.change.demo002.controller;

import com.change.demo002.entity.Rest;
import com.change.demo002.entity.User;
import com.change.demo002.service.PersonService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/2/2 11:07
No such property: code for class: Script1
 * @Description:
 *
 */
@CrossOrigin
@Controller
@RequestMapping(value = "/admin")
public class PersonController {
    @Autowired
    private PersonService personService;

    @CrossOrigin
    @PostMapping("/person")
//    public @ResponseBody Rest<String> person(){
//        Gson gson = new Gson();
//
//        List<User> allUser = personService.selectAllUser();
//        System.out.println(allUser);
//        String json = gson.toJson(allUser);
//        System.out.println(json);
//        return new Rest<String>(1, "22", json);
//    }
    public @ResponseBody Rest<List<User>> person(){

        List<User> allUser = personService.selectAllUser();
        for (User user : allUser){
            user.setKey(user.getId());
        }
        System.out.println(allUser);
        return new Rest<List<User>>(1, "22", allUser);
    }
}
