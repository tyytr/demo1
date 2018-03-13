package com.change.demo002.dao;

import com.change.demo002.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SearchMapper {

    //    管理员：搜索注册认证
    @Select("select * from register where (username like '%${search}%' or phone like '${search}') and (authentication = 'false') ")
    List<User> searchRegister(@Param("search") String search);

    //    管理员：搜索权限管理
    @Select("select * from register where (username like '%${search}%' or phone like '${search}') and (authentication = 'true') and (admin = 'false') ")
    List<User> searchAuthority(@Param("search") String search);

    //    管理员：搜索公告
    @Select("select * from notice where username like '%${search}%' or notice like '%${search}%' or time like '%${search}%' ")
    List<Admin> searchNotice(@Param("search") String search);

    //    管理员：搜索建议
    @Select("select * from advice where username like '%${search}%' or advice like '%${search}%' or time like '%${search}%' ")
    List<Person> searchAdvice(@Param("search") String search);

    //    管理员：搜索商品认证
    @Select("select * from goods where (username like '%${search}%' or prop like '%${search}%' or originalPrice like '%${search}%' or price like '%${search}%' or title like '%${search}%' or goods_describe like '%${search}%'or number like '%${search}%') and (agree = 'false') ")
    List<Goods> searchGoods(@Param("search") String search);

    //    普通用户搜索：上架商品
    @Select("select * from goods where (username like '%${search}%' or prop like '%${search}%' or originalPrice like '%${search}%' or price like '%${search}%' or title like '%${search}%' or goods_describe like '%${search}%'or number like '%${search}%') and (agree = 'true') and (username = #{username}) ")
    List<Goods> personSearchGoods(
            @Param("search") String search,
            @Param("username") String username);

    //    普通用户搜索：购买订单
    @Select("select * from transaction where (username like '%${search}%' or prop like '%${search}%' or originalPrice like '%${search}%' or price like '%${search}%' or title like '%${search}%' or transaction_number like '%${search}%') and (agree = 'true') and (userId = #{userId}) ")
    List<Goods> searchTransactionGoods(
            @Param("search") String search,
            @Param("userId") String userId);

    //    普通用户搜索：购物车
    @Select("select * from goods where (username like '%${search}%' or prop like '%${search}%' or originalPrice like '%${search}%' or price like '%${search}%' or title like '%${search}%' or goods_describe like '%${search}%' or number like '%${search}%') and goods_id in (select goods_id from cart where user_id = #{user_id});")
    List<Goods> searchCartGoods(
            @Param("search") String search,
            @Param("user_id") String userId);

    //    首页搜索：
    @Select("select * from goods where (prop like '%${search}%' or originalPrice like '%${search}%' or price like '%${search}%' or title like '%${search}%' or goods_describe like '%${search}%') and (agree = 'true');")
    List<Goods> homeSearchGoods(
            @Param("search") String search);
}
