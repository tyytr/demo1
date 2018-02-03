package com.change.demo002.service;

import com.change.demo002.dao.PersonMapper;
import com.change.demo002.entity.Person;
import com.change.demo002.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonMapper personMapper;

    //    查询所有用户信息
    public List<User> selectAllUser() {
        return personMapper.selectAllUser();
    }
    //    管理员同意注册认证
    public int adminAgree(String data){
        boolean result = personMapper.updateUser(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
//    管理员认证拒绝
    public int adminDisagree(String data){
        boolean result = personMapper.deleteUser(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
}
