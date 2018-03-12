package com.change.demo002.controller;

import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Rest;
import com.change.demo002.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/2/27 13:30
No such property: code for class: Script1
 * @Description:普通用户：商品展示
 *
 */
@CrossOrigin
@Controller
@RequestMapping(value = "/shopList")
public class ShopController {
    private String mobile = "手机";
    private String desktop = "电脑";
    private String book = "书籍";
    private String skin = "衣服";
    private String camera = "摄影";
    private String usb = "存储设备";
    private String ellipsis = "其他";
    @Autowired
    private ShopService shopService;
    /**
     * @Author: lijun
     * @Date: 2018/2/27 13:40
    No such property: code for class: Script1
     * @Description:商品展示：
     *
     */
    //    查询手机
    @GetMapping("/mobile")
    public @ResponseBody Rest<List<Goods>> selectGoodsMobile(){
        List<Goods> allUser = shopService.selectGoodsMobile(mobile);
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询手机信息成功", allUser);
    }

    //    查询电脑
    @GetMapping("/desktop")
    public @ResponseBody Rest<List<Goods>> selectGoodsDesktop(){
        List<Goods> allUser = shopService.selectGoodsDesktop(desktop);
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询电脑信息成功", allUser);
    }

    //    查询书籍
    @GetMapping("/book")
    public @ResponseBody Rest<List<Goods>> selectGoodsBook(){
        List<Goods> allUser = shopService.selectGoodsBook(book);
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询书籍信息成功", allUser);
    }

    //    查询服装
    @GetMapping("/skin")
    public @ResponseBody Rest<List<Goods>> selectGoodsSkin(){
        List<Goods> allUser = shopService.selectGoodsSkin(skin);
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询服装信息成功", allUser);
    }

    //    查询摄影
    @GetMapping("/camera")
    public @ResponseBody Rest<List<Goods>> selectGoodsCamera(){
        List<Goods> allUser = shopService.selectGoodsCamera(camera);
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询摄影信息成功", allUser);
    }

    //    查询存储设备
    @GetMapping("/usb")
    public @ResponseBody Rest<List<Goods>> selectGoodsUsb(){
        List<Goods> allUser = shopService.selectGoodsUsb(usb);
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询存储设备信息成功", allUser);
    }

    //    查询其他
    @GetMapping("/ellipsis")
    public @ResponseBody Rest<List<Goods>> selectGoodsEllipsis(){
        List<Goods> allUser = shopService.selectGoodsEllipsis(ellipsis);
        for (Goods goods1 : allUser){
            goods1.setKey(goods1.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询其他信息成功", allUser);
    }

    //    商品详情
    @GetMapping("/shopDetails")
    public @ResponseBody Rest<Goods> shopDetails(Goods goods){
        Goods allUser = shopService.selectDetailsGoods(goods);
//        System.out.println(allUser);
        return new Rest<Goods>(1, "查询商品详情信息成功", allUser);
    }

}
