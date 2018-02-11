package com.change.demo002.controller;

import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Rest;
import com.change.demo002.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Author: lijun
 * @Date: 2018/2/11 14:08
No such property: code for class: Script1
 * @Description:普通用户商品发布：
 *
 */
@CrossOrigin
@Controller
@RequestMapping(value = "/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;
    /**
     * @Author: lijun
     * @Date: 2018/2/11 14:12
    No such property: code for class: Script1
     * @Description:普通用户商品发布：商品发布
     *
     */
    @PostMapping("/publish")
    public @ResponseBody Rest<Goods> login(Goods goods){
//        System.out.println(goods.getGoods_describe());
        int result = goodsService.goodsInsert(goods);
        if (result == 1){
            return new Rest<Goods>(1,"商品发布信息提交成功，等待管理员审核",goods);
        }else if (result == -1){
            return new Rest<Goods>(-1,"商品发布信息提交失败，",goods);
        }
        else {
            return new Rest<Goods>(-1,"由于未知原因提交失败",goods);
        }
    }
}
