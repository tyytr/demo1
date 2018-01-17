package com.change.demo002.service.Impl;

import com.change.demo002.dao.UserDao;
import com.change.demo002.entity.User;
import com.change.demo002.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao userdao;
    @Override
    public boolean insertUser(User user) {
//         User user1 = userdao.findUser(user);
         return userdao.findUser(user);
    }
}
