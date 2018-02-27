package com.change.demo002.dao;

import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Search;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SearchMapper {

    //    管理员显示搜索公告
    @Select("select * from notice where username like '%${search}%' or notice like '%${search}%' or time like '%${search}%' ")
    List<Admin> searchNotice(@Param("search") String search);

}
