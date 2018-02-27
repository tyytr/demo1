package com.change.demo002.service;

import com.change.demo002.dao.ShopMapper;
import com.change.demo002.entity.Goods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopService {
    @Autowired
    private ShopMapper shopMapper;
    /**
     * @Author: lijun
     * @Date: 2018/2/27 13:45
    No such property: code for class: Script1
     * @Description:
     *
     */
    //    查询手机信息
    public List<Goods> selectGoodsMobile(String mobile) {
        return shopMapper.selectGoodsMobile(mobile);
    }
    //    查询电脑信息
    public List<Goods> selectGoodsDesktop(String desktop) {
        return shopMapper.selectGoodsDesktop(desktop);
    }
    //    查询书籍信息
    public List<Goods> selectGoodsBook(String book) {
        return shopMapper.selectGoodsBook(book);
    }
    //    查询服装信息
    public List<Goods> selectGoodsSkin(String skin) {
        return shopMapper.selectGoodsSkin(skin);
    }
    //    查询摄影信息
    public List<Goods> selectGoodsCamera(String camera) {
        return shopMapper.selectGoodsCamera(camera);
    }
    //    查询存储设备信息
    public List<Goods> selectGoodsUsb(String usb) {
        return shopMapper.selectGoodsUsb(usb);
    }
    //    查询其他信息
    public List<Goods> selectGoodsEllipsis(String ellipsis) {
        return shopMapper.selectGoodsEllipsis(ellipsis);
    }
}
