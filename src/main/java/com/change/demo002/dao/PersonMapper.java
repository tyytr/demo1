package com.change.demo002.dao;

import com.change.demo002.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PersonMapper {
    //管理员显示所有用户注册注册信息
    @Select("select * from register")
    List<User> selectAllUser();
}
