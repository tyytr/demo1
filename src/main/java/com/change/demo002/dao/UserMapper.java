package com.change.demo002.dao;

import com.change.demo002.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {

    //注册方法
    @Insert("insert into register(username, phone, password, admin, agree) values(#{username}, #{phone}, #{password}, #{admin}, #{agree})")
    int insert(@Param("username") String username,
               @Param("phone") String phone,
               @Param("password") String password,
               @Param("admin") String admin,
               @Param("agree") String agree);

    //根据用户名查询用户
    @Select("select * from register where username=#{username}")
    User findUserByName(@Param("username") String username);

    //登陆方法
    @Select("select * from register where username=#{username} and password=#{password} and admin=#{admin}")
    int select(@Param("username") String username,
                @Param("password") String password,
                @Param("admin") String admin);

}
