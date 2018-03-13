package com.change.demo002.service;

import com.change.demo002.dao.SearchMapper;
import com.change.demo002.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    @Autowired
    private SearchMapper searchMapper;
    /**
     * @Author: lijun
     * @Date: 2018/3/13 13:33
    No such property: code for class: Script1
     * @Description:管理员搜索：注册认证
     *
     */
    //    管理员显示搜索注册认证
    public List<User> searchRegister(Search search){
        return searchMapper.searchRegister(search.getSearch());
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 13:46
    No such property: code for class: Script1
     * @Description:管理员搜索：权限管理
     *
     */
    //    管理员显示搜索权限管理
    public List<User> searchAuthority(Search search){
        return searchMapper.searchAuthority(search.getSearch());
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/26 17:57
    No such property: code for class: Script1
     * @Description:管理员搜索：公告
     *
     */
    //    管理员显示搜索公告
    public List<Admin> searchNotice(Search search){
        return searchMapper.searchNotice(search.getSearch());
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/12 17:46
    No such property: code for class: Script1
     * @Description:管理员搜索：建议
     *
     */
    public List<Person> searchAdvice(Search search){
        return searchMapper.searchAdvice(search.getSearch());
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/12 18:23
    No such property: code for class: Script1
     * @Description:管理员搜索：商品认证
     *
     */
    public List<Goods> searchGoods(Search search){
        return searchMapper.searchGoods(search.getSearch());
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 11:07
    No such property: code for class: Script1
     * @Description:普通用户搜索：上架商品
     *
     */
    public List<Goods> personSearchGoods(Search search){
        return searchMapper.personSearchGoods(
                search.getSearch(),
                search.getUsername());
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 11:28
    No such property: code for class: Script1
     * @Description:管理员搜索：购买订单
     *
     */
    public List<Goods> searchTransactionGoods(Search search){
        return searchMapper.searchTransactionGoods(
                search.getSearch(),
                search.getUserId());
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 11:45
    No such property: code for class: Script1
     * @Description:普通用户搜索：购物车
     *
     */
    public List<Goods> searchCartGoods(Search search){
        return searchMapper.searchCartGoods(
                search.getSearch(),
                search.getUserId());
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/13 16:49
    No such property: code for class: Script1
     * @Description:首页搜索：
     *
     */
    public List<Goods> homeSearchGoods(Search search){
        return searchMapper.homeSearchGoods(
                search.getSearch());
    }
}
