package com.change.demo002.dao;

import com.change.demo002.entity.Goods;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ShopMapper {
    /**
     * @Author: lijun
     * @Date: 2018/2/27 13:48
    No such property: code for class: Script1
     * @Description:
     *
     */
    //    管理员显示手机商品信息
    @Select("select * from goods where prop = '${mobile}' and number > 0 and agree = 'true'")
    List<Goods> selectGoodsMobile(@Param("mobile") String mobile);
    //    管理员显示电脑商品信息
    @Select("select * from goods where prop = '${desktop}' and number > 0 and agree = 'true'")
    List<Goods> selectGoodsDesktop(@Param("desktop") String desktop);
    //    管理员显示书籍商品信息
    @Select("select * from goods where prop = '${book}' and number > 0 and agree = 'true'")
    List<Goods> selectGoodsBook(@Param("book") String book);
    //    管理员显示服装商品信息
    @Select("select * from goods where prop = '${skin}' and number > 0 and agree = 'true'")
    List<Goods> selectGoodsSkin(@Param("skin") String skin);
    //    管理员显示摄影商品信息
    @Select("select * from goods where prop = '${camera}' and number > 0 and agree = 'true'")
    List<Goods> selectGoodsCamera(@Param("camera") String camera);
    //    管理员显示所有未商品认证的商品信息
    @Select("select * from goods where prop = '${usb}' and number > 0 and agree = 'true'")
    List<Goods> selectGoodsUsb(@Param("usb") String usb);
    //    管理员显示其他商品信息
    @Select("select * from goods where prop = '${ellipsis}' and number > 0 and agree = 'true'")
    List<Goods> selectGoodsEllipsis(@Param("ellipsis") String ellipsis);

    //    商品详情
    @Select("select * from goods where goods_id = #{goods_id} and number > 0 and agree = 'true'")
    Goods selectDetailsGoods(@Param("goods_id") String goods_id);
}
