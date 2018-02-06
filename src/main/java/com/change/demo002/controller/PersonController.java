package com.change.demo002.controller;

import com.change.demo002.entity.Person;
import com.change.demo002.entity.Rest;
import com.change.demo002.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: lijun
 * @Date: 2018/2/6 16:33
No such property: code for class: Script1
 * @Description:普通用户个人中心
 *
 */
@CrossOrigin
@RestController
@RequestMapping(value = "/person")
public class PersonController {
    @Autowired
    private PersonService personService;
    /**
     * @Author: lijun
     * @Date: 2018/2/6 16:37
    No such property: code for class: Script1
     * @Description:普通用户反馈建议
     *
     */
    @PostMapping("/advice")
    public Rest<Person> advice(Person person){
//        System.out.println(person.getTime());
        int result = personService.personInsertAdvice(person);
        if (result == 1){
            return new Rest<>(1,"反馈建议提交成功，等待管理员处理",person);
        }else if (result == 2){
            return new Rest<>(-1,"反馈建议提交失败",person);
        }else {
            return new Rest<>(0,"未知原因登陆失败，稍后再提交",person);
        }
    }
}
