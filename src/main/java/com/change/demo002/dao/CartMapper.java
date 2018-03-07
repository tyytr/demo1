package com.change.demo002.dao;

import com.change.demo002.entity.Cart;
import com.change.demo002.entity.Goods;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CartMapper {
    /**
     * @Author: lijun
     * @Date: 2018/3/7 14:28
    No such property: code for class: Script1
     * @Description:普通用户：添加购物车商品
     *
     */
    //    查询是否已经存在购物车
    @Select("select * from cart where user_id=#{user_id} and goods_id=#{goods_id}")
    Cart selectCart(
            @Param("user_id") String user_id,
            @Param("goods_id") String goods_id
    );
    //    插入购物车
    @Insert("insert into cart (user_id, goods_id) values(#{user_id}, #{goods_id})")
    int addCart(
            @Param("user_id") String user_id,
            @Param("goods_id") String goods_id
    );

    //    查询购物车
    @Select("select * from goods where goods_id in (select goods_id from cart where user_id = #{user_id});")
    List<Goods> showCart(
            @Param("user_id") String user_id
    );
    //    删除购物车商品
    @Delete("delete from cart where goods_id = #{data}")
    boolean deleteGoods(@Param("data") String data);
}
