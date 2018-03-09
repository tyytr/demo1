package com.change.demo002.dao;

import com.change.demo002.entity.Goods;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * @Author: lijun
 * @Date: 2018/3/9 16:53
No such property: code for class: Script1
 * @Description:
 *
 */
@Mapper
@Repository
public interface TransactionMapper {
    /**
     * @Author: lijun 
     * @Date: 2018/3/9 17:08
    No such property: code for class: Script1
     * @Description:
     *
     */
    @Select("select number from goods where goods_id = #{goods_id}")
    int selectGoodsNumber(@Param("goods_id") String goods_id);

    @Select("select * from transaction where goods_id=#{goods_id}")
    Goods selectTransaction(@Param("goods_id") String goods_id);

    @Insert("insert into goods(id, username, prop, color, originalPrice, price, title, goods_describe, agree, url, number, time, userId, transaction_number, goods_id) values(#{id}, #{username}, #{prop}, #{color}, #{originalPrice}, #{price}, #{title}, #{goods_describe}, #{agree}, #{url}, #{number}, #{time}, #{userId}, #{transaction_number}, #{goods_id})")
    boolean insertGoodsToTransaction(
            @Param("id") String id,
            @Param("username") String username,
            @Param("prop") String prop,
            @Param("color") String color,
            @Param("originalPrice") String originalPrice,
            @Param("price") String price,
            @Param("title") String title,
            @Param("goods_describe") String goods_describe,
            @Param("url") String url,
            @Param("number") Integer number,
            @Param("time") String time,
            @Param("userId") String userId,
            @Param("transaction_number") Integer transaction_number,
            @Param("goods_id") String goods_id);

    @Update("update transaction set transaction_number = #{data}")
    boolean updateTransactionNumber(@Param("data") Integer data);

    @Update("update goods set number = #{data}")
    boolean updateGoodsNumber(@Param("data") Integer data);
}