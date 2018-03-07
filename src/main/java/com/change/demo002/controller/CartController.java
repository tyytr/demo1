package com.change.demo002.controller;

import com.change.demo002.entity.Cart;
import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Rest;
import com.change.demo002.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/3/7 11:17
No such property: code for class: Script1
 * @Description:购物车
 *
 */
@CrossOrigin
@Controller
@RequestMapping(value = "/cart")
public class CartController {
    @Autowired
    private CartService cartService;
    /**
     * @Author: lijun
     * @Date: 2018/3/7 11:19
    No such property: code for class: Script1
     * @Description:普通用户：添加购物车商品
     *
     */
    @PostMapping("/addCart")
    public @ResponseBody Rest<Cart> addCart(Cart cart){
        System.out.println(cart.getGoods_id()+"     "+cart.getUser_id());
        int result = cartService.addCart(cart);
        if (result == 1) {
            return new Rest<Cart>(1, "加入购物车成功", cart);
        }else if (result == 0){
            return new Rest<Cart>(1, "商品已经加入购物车", cart);
        }else {
            return new Rest<Cart>(1, "未知原因，加入购物车失败，请重新操作或者联系管理员", cart);
        }
    }
    //    展示购物车内容
    @GetMapping("/showCart")
    public @ResponseBody Rest<List<Goods>> showCart(Cart cart){
        List<Goods> allUser = cartService.showCart(cart);
        for (Goods goods : allUser){
            goods.setKey(goods.getGoods_id());
        }
//        System.out.println(allUser);
        return new Rest<List<Goods>>(1, "查询购物车商品信息成功", allUser);
    }
    //  删除商品
    @GetMapping("/deleteGoods")
    public @ResponseBody Rest<List<String>> deleteGoods(Goods goods){
//        System.out.println(admin.getData());
        for (String result:goods.getData()) {
            cartService.deleteGoods(result);
//            System.out.println(result);
        }
        return new Rest<List<String>>(1,"删除购物车商品成功",goods.getData());
    }
}
