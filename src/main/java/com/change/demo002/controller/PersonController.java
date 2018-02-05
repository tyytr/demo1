package com.change.demo002.controller;

import com.change.demo002.entity.Person;
import com.change.demo002.entity.Rest;
import com.change.demo002.entity.User;
import com.change.demo002.service.PersonService;
import com.google.gson.Gson;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Array;
import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/2/2 11:07
No such property: code for class: Script1
 * @Description:管理员个人中心
 *
 */
@CrossOrigin
@Controller
@RequestMapping(value = "/admin")
public class PersonController {
    @Autowired
    private PersonService personService;
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:47
    No such property: code for class: Script1
     * @Description:管理员个人中中心：注册认证
     *
     */
    //    查询未同意注册人员
    @GetMapping("/person")
    public @ResponseBody Rest<List<User>> person(){
        List<User> allUser = personService.selectAllUser();
        for (User user1 : allUser){
            user1.setKey(user1.getId());
        }
//        System.out.println(allUser);
        return new Rest<List<User>>(1, "查询未注册认证的人员信息成功", allUser);
    }
    //    注册认证
    @GetMapping("/authentication")
    public @ResponseBody Rest<List<String>> authentication(Person person){
//        System.out.println(person.getData());
        for (String result:person.getData()) {
            personService.adminAgree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"注册认证成功",person.getData());
    }
    //  注册拒绝
    @GetMapping("/authenticationDisagree")
    public @ResponseBody Rest<List<String>> authenticationDisagree(Person person){
        System.out.println(person.getData());
        for (String s:person.getData()) {
            personService.adminDisagree(s);
            System.out.println(s);
        }
        return new Rest<List<String>>(1,"认证拒绝成功",person.getData());
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:47
    No such property: code for class: Script1
     * @Description:管理员个人中心：权限升级
     *
     */
    //    查询用户升级权限
    @PostMapping("/selectUpdatePerson")
    public @ResponseBody Rest<List<User>> selectUpdatePerson(){
        List<User> allUser = personService.selectUserAuthority();
        for (User user1 : allUser){
            user1.setKey(user1.getId());
        }
//        System.out.println(allUser);
        return new Rest<>(1, "查询未注册认证的人员信息成功", allUser);
    }

    //    权限升级
    @GetMapping("/updatePerson")
    public @ResponseBody Rest<List<String>> updatePerson(Person person){
//        System.out.println(person.getData());
        for (String s:person.getData()) {
            personService.updatePerson(s);
            System.out.println(s);
        }
        return new Rest<>(1,"注册认证成功",person.getData());
    }
}
