package com.change.demo002.dao;

import com.change.demo002.entity.Admin;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PersonMapper {
    /**
     * @Author: lijun
     * @Date: 2018/2/7 18:20
    No such property: code for class: Script1
     * @Description:普通用户个人中心：
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
