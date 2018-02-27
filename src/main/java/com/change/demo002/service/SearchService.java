package com.change.demo002.service;

import com.change.demo002.dao.SearchMapper;
import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    @Autowired
    private SearchMapper searchMapper;
    /**
     * @Author: lijun
     * @Date: 2018/2/26 17:57
    No such property: code for class: Script1
     * @Description:搜索：公告
     *
     */
    //    管理员显示搜索公告
    public List<Admin> searchNotice(Search search){
        return searchMapper.searchNotice(search.getSearch());
    }

}
