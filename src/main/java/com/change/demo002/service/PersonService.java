package com.change.demo002.service;

import com.change.demo002.dao.PersonMapper;
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
}
