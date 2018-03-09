package com.change.demo002.controller;

import com.change.demo002.entity.Goods;
import com.change.demo002.entity.Rest;
import com.change.demo002.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: lijun
 * @Date: 2018/3/9 16:49
No such property: code for class: Script1
 * @Description:购买接口
 *
 */
@CrossOrigin
@Controller
@RequestMapping(value = "/transaction")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    /**
     * @Author: lijun
     * @Date: 2018/3/9 16:56
    No such property: code for class: Script1
     * @Description:
     *
     */
    @PostMapping("/buyGoods")
    public Rest<Goods> transaction(Goods goods){
        int numberResult = transactionService.selectGoodsNumber(goods);
        Goods transactionResult = transactionService.selectTransaction(goods);
        if (null == transactionResult){
            boolean result1 = transactionService.insertGoodsToTransaction(goods);
            boolean result2 = transactionService.updateGoodsNumber(numberResult-goods.getTransaction_number());
        }else {
            boolean result1 = transactionService.updateTransactionNumber(goods.getTransaction_number()+transactionResult.getTransaction_number());
            boolean result2 = transactionService.updateGoodsNumber(numberResult-goods.getTransaction_number());
        }
        return new Rest<Goods>(1,"购买商品成功，",goods);
    }
}
