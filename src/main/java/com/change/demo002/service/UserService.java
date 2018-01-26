package com.change.demo002.service;

import com.change.demo002.dao.UserMapper;
import com.change.demo002.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    private UserMapper userMapper;


    public int insert(User user){

        //查询用户名是否存在
        User exitUser = userMapper.findUserByName(user.getUsername());


        if (exitUser != null){
            //用户名存在
            return 0;
        }else {
            //用户名不存在，执行插入语句
            int b = userMapper.insert(user.getUsername(),
                    user.getPhone(),
                    user.getPassword(),
                    user.getAdmin(),
                    user.getAgree());
            if (b !=0 ){
                return 1;
            }else {
                return 2;
            }
        }
    }

}
