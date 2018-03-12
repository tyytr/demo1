package com.change.demo002.dao;

import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Goods;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PersonMapper {
    /**
     * @Author: lijun
     * @Date: 2018/3/7 17:41
    No such property: code for class: Script1
     * @Description:普通用户个人中心：上架商品
     *
     */
    //    显示上架商品
    @Select("select * from goods where id = #{id} and agree = 'true'")
    List<Goods> showGoods(@Param("id") String id);
    //    下价升品
    @Delete("delete from goods where goods_id = #{data} and agree = 'true'")
    boolean personGoodsDisagree(@Param("data") String data);
    /**
     * @Author: lijun
     * @Date: 2018/3/12 14:52
    No such property: code for class: Script1
     * @Description:普通用户个人中心：购买订单
     *
     */
    //    显示购买订单
    @Select("select * from transaction where userId = #{id} and agree = 'true'")
    List<Goods> buyTransaction(@Param("id") String id);
    //    删除订单记录
    @Update("update transaction set agree = 'false' where goods_id = #{data}")
    boolean deleteTransaction(@Param("data") String data);
    /**
     * @Author: lijun
     * @Date: 2018/2/7 18:20
    No such property: code for class: Script1
     * @Description:普通用户个人中心：系统公告
     *
     */
    //    显示所有系统公告
    @Select("select * from notice")
    List<Admin> personSelectNotice();
    /**
     * @Author: lijun
     * @Date: 2018/2/6 16:55
    No such property: code for class: Script1
     * @Description:普通用户个人中心：反馈建议
     *
     */
    //    反馈建议
    @Insert("insert into advice (id, username, advice, agree, disagree, time) values(#{id}, #{username}, #{advice}, #{agree}, #{disagree}, #{time})")
    int personInsertAdvice(
            @Param("id") String id,
            @Param("username") String username,
            @Param("advice") String advice,
            @Param("agree") String agree,
            @Param("disagree") String disagree,
            @Param("time") String time
    );
}
