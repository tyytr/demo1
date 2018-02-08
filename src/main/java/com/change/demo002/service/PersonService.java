package com.change.demo002.service;

import com.change.demo002.dao.PersonMapper;
import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonMapper personMapper;
    /**
     * @Author: lijun
     * @Date: 2018/2/7 18:19
    No such property: code for class: Script1
     * @Description:
     *
     */
    //    查询所有系统公告
    public List<Admin> personSelectNotice() {
        return personMapper.personSelectNotice();
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/6 16:50
    No such property: code for class: Script1
     * @Description:普通用户个人中心：反馈建议方法
     *
     */
    public int personInsertAdvice(Person person){
        int result = personMapper.personInsertAdvice(
                person.getId(),
                person.getUsername(),
                person.getAdvice(),
                person.getAgree(),
                person.getDisagree(),
                person.getTime());
        if(result != 0){
            return 1;
        }else {
            return -1;
        }
    }
}
