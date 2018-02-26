package com.change.demo002.controller;

import com.change.demo002.entity.*;
import com.change.demo002.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
public class AdminController {
    @Autowired
    private AdminService adminService;
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
        List<User> allUser = adminService.selectAllUser();
        for (User user1 : allUser){
            user1.setKey(user1.getId());
        }
//        System.out.println(allUser);
        return new Rest<List<User>>(1, "查询未注册认证的人员信息成功", allUser);
    }
    //    注册认证
    @GetMapping("/authentication")
    public @ResponseBody Rest<List<String>> authentication(Admin admin){
//        System.out.println(person.getData());
        for (String result:admin.getData()) {
            adminService.adminAgree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"注册认证成功",admin.getData());
    }
    //  注册拒绝
    @GetMapping("/authenticationDisagree")
    public @ResponseBody Rest<List<String>> authenticationDisagree(Admin admin){
//        System.out.println(admin.getData());
        for (String result:admin.getData()) {
            adminService.adminDisagree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"认证拒绝成功",admin.getData());
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
        List<User> allUser = adminService.selectUserAuthority();
        for (User user1 : allUser){
            user1.setKey(user1.getId());
        }
//        System.out.println(allUser);
        return new Rest<>(1, "查询未注册认证的人员信息成功", allUser);
    }

    //    权限升级
    @GetMapping("/updatePerson")
    public @ResponseBody Rest<List<String>> updatePerson(Admin admin){
//        System.out.println(person.getData());
        for (String result:admin.getData()) {
            adminService.updatePerson(result);
//            System.out.println(result);
        }
        return new Rest<>(1,"注册认证成功",admin.getData());
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/24 16:54
    No such property: code for class: Script1
     * @Description:管理员个人中心：商品认证
     *
     */
    //    查询未处理的商品
    @GetMapping("/goods")
    public @ResponseBody Rest<List<Goods>> goods(){
        List<Goods> allUser = adminService.selectAllGoods();
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询未商品认证的商品信息成功", allUser);
    }
    //    商品认证
    @GetMapping("/goodsAgree")
    public @ResponseBody Rest<List<String>> goodsAgree(Goods goods){
//        System.out.println(person.getData());
        for (String result:goods.getData()) {
            adminService.goodsAgree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"商品认证成功",goods.getData());
    }
    //  注册拒绝
    @GetMapping("/goodsDisagree")
    public @ResponseBody Rest<List<String>> goodsDelete(Goods goods){
//        System.out.println(admin.getData());
        for (String result:goods.getData()) {
            adminService.goodsDisagree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"认证拒绝成功",goods.getData());
    }

    /**
     * @Author: lijun
     * @Date: 2018/2/7 14:40
    No such property: code for class: Script1
     * @Description:管理员个人中心：公告系统
     *
     */
    //    管理员发布公告
    @PostMapping("/notice")
    public @ResponseBody Rest<Admin> notice(Admin admin){
//        System.out.println(person.getTime());
        int result = adminService.adminInsertNotice(admin);
        if (result == 1){
            return new Rest<>(1,"发布公告成功",admin);
        }else if (result == 2){
            return new Rest<>(-1,"发布公告成功",admin);
        }else {
            return new Rest<>(0,"未知原因发布公告失败，稍后再提交",admin);
        }
    }
    //    显示发布的公告
    @GetMapping("/selectNotice")
    public @ResponseBody Rest<List<Admin>> selectNotice(){
        List<Admin> allNotice = adminService.selectAllNotice();
        for (Admin admin1 : allNotice){
            admin1.setKey(admin1.getNotice_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Admin>>(1, "查询未处理建议成功", allNotice);
    }
    //  删除公告
    @GetMapping("/adminDeleteNotice")
    public @ResponseBody Rest<List<String>> adminDeleteNotice(Admin admin){
//        System.out.println(admin.getData());
        for (String result:admin.getData()) {
            adminService.adminDeleteNotice(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"认证拒绝成功",admin.getData());
    }

    /**
     * @Author: lijun
     * @Date: 2018/2/6 17:23
    No such property: code for class: Script1
     * @Description:管理员个人中心：反馈建议
     *
     */
    //    查询未处理的建议
    @GetMapping("/advice")
    public @ResponseBody Rest<List<Person>> advice(){
        List<Person> allAdvice = adminService.selectAllAdvice();
        for (Person person1 : allAdvice){
            person1.setKey(person1.getAdvice_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Person>>(1, "查询未处理建议成功s", allAdvice);
    }
    //    采纳建议
    @GetMapping("/adviceAgree")
    public @ResponseBody Rest<List<String>> adviceAgree(Admin admin){
//        System.out.println(admin.getData());
        for (String result:admin.getData()) {
            adminService.adviceAgree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"采纳建议",admin.getData());
    }
    //    拒绝建议
    @GetMapping("/adviceDisagree")
    public @ResponseBody Rest<List<String>> adviceDisagree(Admin admin){
//        System.out.println(admin.getData());
        for (String result:admin.getData()) {
            adminService.adviceDisagree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"拒绝建议",admin.getData());
    }
}
