package com.change.demo002.service;

import com.change.demo002.dao.AdminMapper;
import com.change.demo002.entity.Person;
import com.change.demo002.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminMapper adminMapper;
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:47
    No such property: code for class: Script1
     * @Description:管理员个人中中心：注册认证
     *
     */
    //    查询所有用户信息
    public List<User> selectAllUser() {
        return adminMapper.selectAllUser();
    }
    //    管理员同意注册认证
    public int adminAgree(String data){
        boolean result = adminMapper.updateUser(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
    //    管理员认证拒绝
    public int adminDisagree(String data){
        boolean result = adminMapper.deleteUser(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:47
    No such property: code for class: Script1
     * @Description:管理员个人中心：权限升级
     *
     */
    //    查询用户升级权限
    public List<User> selectUserAuthority() {
        return adminMapper.selectUserAuthority();
    }
    //    权限升级
    public int updatePerson(String data){
        boolean result = adminMapper.updatePerson(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/6 17:17
    No such property: code for class: Script1
     * @Description:管理员个人中心：反馈建议
     *
     */
    //    反馈建议
    public List<Person> selectAllAdvice(){
        return adminMapper.selectAllAdvice();
    }

}
