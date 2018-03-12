package com.change.demo002.dao;

import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Person;
import com.change.demo002.entity.Search;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SearchMapper {

    //    搜索公告
    @Select("select * from notice where username like '%${search}%' or notice like '%${search}%' or time like '%${search}%' ")
    List<Admin> searchNotice(@Param("search") String search);

    //    搜索建议
    @Select("select * from advice where username like '%${search}%' or advice like '%${search}%' or time like '%${search}%' ")
    List<Person> searchAdvice(@Param("search") String search);

    //    搜索商品
    @Select("select * from goods where (username like '%${search}%' or prop like '%${search}%' or originalPrice like '%${search}%' or price like '%${search}%' or title like '%${search}%' or goods_describe like '%${search}%'or number like '%${search}%') and (agree = 'false') ")
    List<Goods> searchGoods(@Param("search") String search);
}
