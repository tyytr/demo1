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
        String username = user.getUsername();
        String phone = user.getPhone();
        String password = user.getPassword();
        String rpassword = user.getRpassword();
        String admin = user.getAdmin();
        String agree = user.getAgree();
        System.out.println("注册");
//        if(username == null||phone == null||password == null||rpassword == null||admin == null||agree == null||agree == "false"||password !=rpassword) return false;
//        else return userdao.findUser(user);
        return userdao.findUser(user);
    }

    @Override
    public User loginUser(User user){
        String username = user.getUsername();
        String password = user.getPassword();
        User user1 = userdao.loginUser(user);
//        System.out.println(user1);
        return userdao.loginUser(user);
    }
}
