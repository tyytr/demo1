package com.change.demo002.entity;

public class Cart {
    private String cart_id;
    private String user_id;
    private String goods_id;
    private String key;

    public String getCart_id() {
        return cart_id;
    }

    public void setCart_id(String cart_id) {
        this.cart_id = cart_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getGoods_id() {
        return goods_id;
    }

    public void setGoods_id(String goods_id) {
        this.goods_id = goods_id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Cart(){

    }

    public Cart(String cart_id, String user_id, String goods_id, String key) {
        this.cart_id = cart_id;
        this.user_id = user_id;
        this.goods_id = goods_id;
        this.key = key;
    }
    @Override
    public String toString() {
        return "Cart{" +
                "cart_id='" + cart_id + '\'' +
                "user_id='" + user_id + '\'' +
                "goods_id='" + goods_id + '\'' +
                ", key='" + key + '\'' +
                '}';
    }
}
