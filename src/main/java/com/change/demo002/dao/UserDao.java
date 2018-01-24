package com.change.demo002.dao;

import com.change.demo002.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
    boolean findUser(User user);
    User loginUser(User user);
}
