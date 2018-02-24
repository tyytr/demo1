package com.change.demo002.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @Author: lijun
 * @Date: 2018/2/11 14:11
No such property: code for class: Script1
 * @Description:普通用户个人中心：商品发布
 *
 */
@Mapper
@Repository
public interface GoodsMapper {
    //    商品发布方法
    @Insert("insert into goods(id, username, prop, color, originalPrice, price, title, goods_describe, agree, url, number, time) values(#{id}, #{username}, #{prop}, #{color}, #{originalPrice}, #{price}, #{title}, #{goods_describe}, #{agree}, #{url}, #{number}, #{time})")
    int goodsInsert(@Param("id") String id,
                    @Param("username") String username,
                    @Param("prop") String prop,
                    @Param("color") String color,
                    @Param("originalPrice") String originalPrice,
                    @Param("price") String price,
                    @Param("title") String title,
                    @Param("goods_describe") String goods_describe,
                    @Param("agree") String agree,
                    @Param("url") String url,
                    @Param("number") String number,
                    @Param("time") String time);
}
