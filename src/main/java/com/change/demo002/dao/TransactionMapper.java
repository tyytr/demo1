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

    @Insert("insert into transaction(id, username, prop, color, originalPrice, price, title, goods_describe, url, number, time, userId, transaction_number, goods_id, agree) values(#{id}, #{username}, #{prop}, #{color}, #{originalPrice}, #{price}, #{title}, #{goods_describe}, #{url}, #{number}, #{time}, #{userId}, #{transaction_number}, #{goods_id}, #{agree})")
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
            @Param("goods_id") String goods_id,
            @Param("agree") String agree);

    @Update("update transaction set transaction_number = #{data} where goods_id = #{goods_id}")
    boolean updateTransactionNumber(
            @Param("goods_id") String goods_id,
            @Param("data") Integer data);

    @Update("update goods set number = #{data} where goods_id = #{goods_id}")
    boolean updateGoodsNumber(
            @Param("goods_id") String goods_id,
            @Param("data") Integer data);
}
