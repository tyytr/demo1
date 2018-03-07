package com.change.demo002.service;

import com.change.demo002.dao.CartMapper;
import com.change.demo002.entity.Cart;
import com.change.demo002.entity.Goods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: lijun
 * @Date: 2018/3/7 11:18
No such property: code for class: Script1
 * @Description:购物车
 *
 */
@Service
public class CartService {
    @Autowired
    private CartMapper cartMapper;
    /**
     * @Author: lijun
     * @Date: 2018/3/7 14:22
    No such property: code for class: Script1
     * @Description:普通用户：添加购物车商品
     *
     */
    //    加入购物车
    public int addCart(Cart cart){
        Cart selectResult = cartMapper.selectCart(
                cart.getUser_id(),
                cart.getGoods_id());
        if (selectResult != null){
            return 0;
        }else {
            int result = cartMapper.addCart(
                    cart.getUser_id(),
                    cart.getGoods_id()
            );
            if (result != 0){
                return 1;
            }else {
                return -1;
            }
        }
    }
    //    查询购物车
    public List<Goods> showCart(Cart cart) {
//        System.out.println(cart.getUser_id());
        return cartMapper.showCart(cart.getUser_id());
    }
    //    删除购物车商品
    public int deleteGoods(String data){
        boolean result = cartMapper.deleteGoods(data);
        if (result){
            return 1;
        }else {
            return -1;
        }
    }
}
