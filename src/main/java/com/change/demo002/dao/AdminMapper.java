package com.change.demo002.dao;

import com.change.demo002.entity.Person;
import com.change.demo002.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AdminMapper {
    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:47
    No such property: code for class: Script1
     * @Description:管理员个人中中心：注册认证方法
     *
     */
    //    管理员显示所有用户注册注册信息
    @Select("select * from register where authentication = 'false'")
    List<User> selectAllUser();

    //    管理员注册认证
    @Update("update register set authentication = 'true' where id = #{data}")
    boolean updateUser(@Param("data") String data);

    //    管理员注册认证拒绝
    @Delete("delete from register where id = #{data}")
    boolean deleteUser(@Param("data") String data);

    /**
     * @Author: lijun
     * @Date: 2018/2/5 11:47
    No such property: code for class: Script1
     * @Description:管理员个人中心：权限升级方法
     *
     */
    //    查询用户升级权限
    @Select("select * from register where authentication = 'true' and admin = 'false'")
    List<User> selectUserAuthority();
    //    管理员注册认证
    @Update("update register set admin = 'true' where id = #{data}")
    boolean updatePerson(@Param("data") String data);

    /**
     * @Author: lijun
     * @Date: 2018/2/6 17:26
    No such property: code for class: Script1
     * @Description:管理员个人中心：反馈建议方法
     *
     */
    //    管理员显示所有反馈建议信息
    @Select("select * from advice where agree = 'false' and disagree = 'false'")
    List<Person> selectAllAdvice();
}
