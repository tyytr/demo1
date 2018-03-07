package com.change.demo002.controller;

import com.change.demo002.entity.Admin;
import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Person;
import com.change.demo002.entity.Rest;
import com.change.demo002.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/2/6 16:33
No such property: code for class: Script1
 * @Description:普通用户个人中心
 *
 */
@CrossOrigin
@RestController
@RequestMapping(value = "/person")
public class PersonController {
    @Autowired
    private PersonService personService;
    /**
     * @Author: lijun
     * @Date: 2018/3/7 17:34
    No such property: code for class: Script1
     * @Description:普通用户个人中心：上架商品
     *
     */
    //    显示上架的商品
    @GetMapping("/showGoods")
    public @ResponseBody Rest<List<Goods>> showGoods(Goods goods){
        List<Goods> allNotice = personService.showGoods(goods);
        for (Goods goods1 : allNotice){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询所有系统公告成功", allNotice);
    }
    //  商品下架
    @GetMapping("/personGoodsDisagree")
    public @ResponseBody Rest<List<String>> personGoodsDisagree(Goods goods){
//        System.out.println(admin.getData());
        for (String result:goods.getData()) {
            personService.personGoodsDisagree(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"商品下架成功",goods.getData());
    }
    /**
     * @Author: lijun
     * @Date: 2018/2/7 18:10
    No such property: code for class: Script1
     * @Description:普通用户个人中心：系统公告
     *
     */
    //    显示发布的公告
    @GetMapping("/personSelectNotice")
    public @ResponseBody Rest<List<Admin>> personSelectNotice(){
        List<Admin> allNotice = personService.personSelectNotice();
        for (Admin admin1 : allNotice){
            admin1.setKey(admin1.getNotice_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Admin>>(1, "查询所有系统公告成功", allNotice);
    }

    /**
     * @Author: lijun
     * @Date: 2018/2/6 16:37
    No such property: code for class: Script1
     * @Description:普通用户个人中心：反馈建议
     *
     */
    @PostMapping("/advice")
    public Rest<Person> advice(Person person){
//        System.out.println(person.getTime());
        int result = personService.personInsertAdvice(person);
        if (result == 1){
            return new Rest<>(1,"反馈建议提交成功，等待管理员处理",person);
        }else if (result == 2){
            return new Rest<>(-1,"反馈建议提交失败",person);
        }else {
            return new Rest<>(0,"未知原因反馈建议失败，稍后再提交",person);
        }
    }


}
