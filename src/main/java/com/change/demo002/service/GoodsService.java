package com.change.demo002.service;

import com.change.demo002.dao.GoodsMapper;
import com.change.demo002.entity.Goods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * @Author: lijun
 * @Date: 2018/2/11 14:10
No such property: code for class: Script1
 * @Description:普通用户个人中心：商品发布
 *
 */
@Service
public class GoodsService {
    @Autowired
    private GoodsMapper goodsMapper;
    /**
     * @Author: lijun
     * @Date: 2018/2/11 14:18
    No such property: code for class: Script1
     * @Description:普通用户商品发布：商品发布
     *
     */
    //    商品发布
    public int goodsInsert(Goods goods){
        int result = goodsMapper.goodsInsert(
                goods.getId(),
                goods.getUsername(),
                goods.getProp(),
                goods.getColor(),
                goods.getOriginalPrice(),
                goods.getPrice(),
                goods.getTitle(),
                goods.getGoods_describe(),
                goods.getAgree(),
                goods.getUrl(),
                goods.getNumber(),
                goods.getTime()
        );
        if (result !=0 ){
            return 1;
        }else {
            return -1;
        }
    }
}
