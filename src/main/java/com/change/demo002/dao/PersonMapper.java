package com.change.demo002.dao;

import com.change.demo002.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PersonMapper {
//    管理员显示所有用户注册注册信息
    @Select("select * from register where authentication = 'false'")
    List<User> selectAllUser();

//    管理员注册认证
    @Update("update register set authentication = 'true' where id = #{data}")
    boolean updateUser(@Param("data") String data);

//    管理员注册认证拒绝
    @Delete("delete from register where id = #{data}")
    boolean deleteUser(@Param("data") String data);
}
