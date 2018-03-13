package com.change.demo002.controller;

import com.change.demo002.entity.*;
import com.change.demo002.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/2/26 17:38
No such property: code for class: Script1
 * @Description:管理员：搜索
 *
 */
@CrossOrigin
@Controller
@RequestMapping(value = "/search")
public class SearchController {
    @Autowired
    private SearchService searchService;
    /**
     * @Author: lijun
     * @Date: 2018/3/13 13:31
    No such property: code for class: Script1
     * @Description:管理员搜索：注册认证
     *
     */
    @PostMapping("/searchRegister")
    public @ResponseBody Rest<List<User>> searchRegister(Search search){
//        System.out.println(search.getSearch());
        List<User> allRegister = searchService.searchRegister(search);
        for (User user : allRegister){
            user.setKey(user.getId());
        }
        System.out.println(allRegister);
        return new Rest<List<User>>(1, "查询成功", allRegister);
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 13:44
    No such property: code for class: Script1
     * @Description:管理员搜索：权限管理
     *
     */
    @PostMapping("/searchAuthority")
    public @ResponseBody Rest<List<User>> searchAuthority(Search search){
//        System.out.println(search.getSearch());
        List<User> allAuthority = searchService.searchAuthority(search);
        for (User user : allAuthority){
            user.setKey(user.getId());
        }
        System.out.println(allAuthority);
        return new Rest<List<User>>(1, "查询成功", allAuthority);
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/26 17:40
    No such property: code for class: Script1
     * @Description:管理员搜索：公告
     *
     */
    @PostMapping("/searchNotice")
    public @ResponseBody
    Rest<List<Admin>> searchNotice(Search search){
//        System.out.println(search.getSearch());
        List<Admin> allNotice = searchService.searchNotice(search);
        for (Admin admin : allNotice){
            admin.setKey(admin.getNotice_id());
        }
        System.out.println(allNotice);
        return new Rest<List<Admin>>(1, "查询成功", allNotice);
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/12 17:44
    No such property: code for class: Script1
     * @Description:管理员搜索：建议
     *
     */
    @PostMapping("/searchAdvice")
    public @ResponseBody Rest<List<Person>> searchAdvice(Search search){
        System.out.println(search.getSearch());
        List<Person> allAdvice = searchService.searchAdvice(search);
        for (Person person : allAdvice){
            person.setKey(person.getAdvice_id());
        }
        System.out.println(allAdvice);
        return new Rest<List<Person>>(1, "查询反馈建议成功", allAdvice);
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/12 18:22
    No such property: code for class: Script1
     * @Description:管理员搜索：商品认证
     *
     */
    @PostMapping("/searchGoods")
    public @ResponseBody Rest<List<Goods>> searchGoods(Search search){
//        System.out.println(search.getSearch());
        List<Goods> allGoods = searchService.searchGoods(search);
        for (Goods goods : allGoods){
            goods.setKey(goods.getGoods_id());
        }
//        System.out.println(allGoods);
        return new Rest<List<Goods>>(1, "查询商品成功", allGoods);
    }
    /**
     * @Author: lijun 
     * @Date: 2018/3/13 11:04
    No such property: code for class: Script1
     * @Description:普通用户搜索：上架商品
     *
     */
    @PostMapping("/personSearchGoods")
    public @ResponseBody Rest<List<Goods>> personSearchGoods(Search search){
//        System.out.println(search.getSearch());
        List<Goods> allGoods = searchService.personSearchGoods(search);
        for (Goods goods : allGoods){
            goods.setKey(goods.getGoods_id());
        }
//        System.out.println(allGoods);
        return new Rest<List<Goods>>(1, "查询的商品成功", allGoods);
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 11:27
    No such property: code for class: Script1
     * @Description:普通用户搜索：购买订单
     *
     */
    @PostMapping("/searchTransactionGoods")
    public @ResponseBody Rest<List<Goods>> searchTransactionGoods(Search search){
//        System.out.println(search.getSearch());
        List<Goods> allGoods = searchService.searchTransactionGoods(search);
        for (Goods goods : allGoods){
            goods.setKey(goods.getGoods_id());
        }
//        System.out.println(allGoods);
        return new Rest<List<Goods>>(1, "查询的商品成功", allGoods);
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 11:44
    No such property: code for class: Script1
     * @Description:普通用户搜索：购物车
     *
     */
    @PostMapping("/searchCartGoods")
    public @ResponseBody Rest<List<Goods>> searchCartGoods(Search search){
//        System.out.println(search.getSearch());
        List<Goods> allGoods = searchService.searchCartGoods(search);
        for (Goods goods : allGoods){
            goods.setKey(goods.getGoods_id());
        }
//        System.out.println(allGoods);
        return new Rest<List<Goods>>(1, "查询的商品成功", allGoods);
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 16:48
    No such property: code for class: Script1
     * @Description:首页搜索：
     *
     */
    @PostMapping("/homeSearchGoods")
    public @ResponseBody Rest<List<Goods>> homeSearchGoods(Search search){
//        System.out.println(search.getSearch());
        List<Goods> allGoods = searchService.homeSearchGoods(search);
        for (Goods goods : allGoods){
            goods.setKey(goods.getGoods_id());
        }
//        System.out.println(allGoods);
        return new Rest<List<Goods>>(1, "查询的商品成功", allGoods);
    }
}
