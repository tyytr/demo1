package com.change.demo002.service;

import com.change.demo002.dao.TransactionMapper;
import com.change.demo002.entity.Goods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author: lijun
 * @Date: 2018/3/9 16:52
No such property: code for class: Script1
 * @Description:购买接口：服务
 *
 */
@Service
public class TransactionService {
    @Autowired
    private TransactionMapper transactionMapper;
    /**
     * @Author: lijun 
     * @Date: 2018/3/9 17:11
    No such property: code for class: Script1
     * @Description:
     *
     */
    public int selectGoodsNumber(Goods goods){
        return transactionMapper.selectGoodsNumber(goods.getGoods_id());
    }

    public Goods selectTransaction(Goods goods){
        return transactionMapper.selectTransaction(goods.getGoods_id());
    }

    public Boolean insertGoodsToTransaction(Goods goods){
        return transactionMapper.insertGoodsToTransaction(
                goods.getId(),
                goods.getUsername(),
                goods.getProp(),
                goods.getColor(),
                goods.getOriginalPrice(),
                goods.getPrice(),
                goods.getTitle(),
                goods.getGoods_describe(),
                goods.getUrl(),
                goods.getNumber(),
                goods.getTime(),
                goods.getUserId(),
                goods.getTransaction_number(),
                goods.getGoods_id(),
                goods.getAgree());
    }

    public boolean updateTransactionNumber(String goods_id,Integer data){
        return transactionMapper.updateTransactionNumber(goods_id,data);
    }
    public boolean updateGoodsNumber(String goods_id,Integer data){
        return transactionMapper.updateGoodsNumber(goods_id, data);
    }
}
