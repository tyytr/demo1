package com.change.demo002.service.Impl;

import com.change.demo002.dao.UserDao;
import com.change.demo002.entity.User;
import com.change.demo002.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao dao;
    @Override
    public User findUser(User user) {
        //逻辑处理，各种细节操作
        dao.findUser(user);
        return user;
    }
}
