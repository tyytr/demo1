package com.change.demo002.controller;

import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Rest;
import com.change.demo002.entity.Search;
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
        System.out.println(search.getSearch());
        List<Admin> allNotice = searchService.searchNotice(search);
        for (Admin admin : allNotice){
            admin.setKey(admin.getNotice_id());
        }
        System.out.println(allNotice);
        return new Rest<List<Admin>>(1, "查询成功", allNotice);
    }
}
