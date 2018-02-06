package com.change.demo002.service;

import com.change.demo002.dao.UserMapper;
import com.change.demo002.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:52
    No such property: code for class: Script1
     * @Description:用户：注册
     *
     */
    public int userInsert(User user){
        //查询用户名是否存在
        User exitUser = userMapper.findUserByName(user.getUsername());

        if (exitUser != null){
            //用户名存在
            return 0;
        }else {
            //用户名不存在，执行插入语句
            int result = userMapper.insert(
                    user.getUsername(),
                    user.getPhone(),
                    user.getPassword(),
                    user.getAdmin(),
                    user.getAgree(),
                    user.getAuthentication());
            if (result !=0 ){
                return 1;
            }else {
                return 2;
            }
        }
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:52
    No such property: code for class: Script1
     * @Description:用户：登陆
     *
     */
    public int userSelect(User user){
        //查询是否注册
        User exitUser = userMapper.findUserByName(user.getUsername());
        System.out.println(user);
        if (null == exitUser){
            return -2;
        }else if ("false".equals(exitUser.getAuthentication())){
            return -3;
        }else if (!exitUser.getPassword().equals(user.getPassword())){
            return -1;
        }else if ("false".equals(exitUser.getAdmin())){
            return 1;
        }else if ("true".equals(exitUser.getAdmin())) {
            return 2;
        }else {
            return 0;
        }
    }
//    根据用户名查询用户所有信息
    public User selectUser(User user){
        return userMapper.findUserByName(user.getUsername());
    }


}
