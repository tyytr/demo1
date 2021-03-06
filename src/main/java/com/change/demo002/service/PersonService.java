package com.change.demo002.service;

import com.change.demo002.dao.PersonMapper;
import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Goods;
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
     * @Date: 2018/3/7 17:39
    No such property: code for class: Script1
     * @Description:普通用户个人中心：上架商品方法
     *
     */
    //    查询上架商品
    public List<Goods> showGoods(Goods goods) {
        return personMapper.showGoods(goods.getId());
    }
    //    商品下架
    public int personGoodsDisagree(String data){
        boolean result = personMapper.personGoodsDisagree(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
    /**
     * @Author: lijun
     * @Date: 2018/3/12 14:51
    No such property: code for class: Script1
     * @Description:普通用户个人中心：购买订单
     *
     */
    //    查询购买订单
    public List<Goods> buyTransaction(Goods goods) {
        return personMapper.buyTransaction(goods.getId());
    }
    //    删除订单记录
    public int deleteTransaction(String data){
        boolean result = personMapper.deleteTransaction(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/7 18:19
    No such property: code for class: Script1
     * @Description:普通用户个人中心：系统公告方法
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
    //    反馈建议
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
