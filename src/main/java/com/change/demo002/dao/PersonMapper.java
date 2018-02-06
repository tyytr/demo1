package com.change.demo002.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface PersonMapper {
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
