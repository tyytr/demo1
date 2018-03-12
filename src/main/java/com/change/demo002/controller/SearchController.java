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
     * @Date: 2018/2/26 17:40
    No such property: code for class: Script1
     * @Description:搜索：公告
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
     * @Description:搜索：建议
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
     * @Description:搜索：物品
     *
     */
    @PostMapping("/searchGoods")
    public @ResponseBody Rest<List<Goods>> searchGoods(Search search){
        System.out.println(search.getSearch());
        List<Goods> allGoods = searchService.searchGoods(search);
        for (Goods goods : allGoods){
            goods.setKey(goods.getGoods_id());
        }
        System.out.println(allGoods);
        return new Rest<List<Goods>>(1, "查询商品成功", allGoods);
    }
}
