package com.change.demo002.entity;

public class Goods {
    private Integer goods_id;
    private String id;
    private String username;
    private String prop;
    private String color;
    private String originalPrice;
    private String price;
    private String title;
    private String goods_describe;
    private String agree;
    private String url;
    private String number;

    public Goods(){

    }

    public Goods(Integer goods_id, String id, String username, String prop, String color, String originalPrice, String price ,String title, String describe, String agree, String url, String number) {
        this.goods_id = goods_id;
        this.id = id;
        this.username = username;
        this.prop = prop;
        this.color = color;
        this.originalPrice = originalPrice;
        this.price = price;
        this.title = title;
        this.goods_describe = describe;
        this.agree = agree;
        this.url = url;
        this.number = number;
    }

    public Integer getGoods_id() {
        return goods_id;
    }

    public void setGoods_id(Integer goods_id) {
        this.goods_id = goods_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getProp() {
        return prop;
    }

    public void setProp(String prop) {
        this.prop = prop;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(String originalPrice) {
        this.originalPrice = originalPrice;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGoods_describe() {
        return goods_describe;
    }

    public void setGoods_describe(String goods_describe) {
        this.goods_describe = goods_describe;
    }

    public String getAgree() {
        return agree;
    }

    public void setAgree(String agree) {
        this.agree = agree;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "Person{" +
                "goods_id='" + goods_id + '\'' +
                ", id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", prop='" + prop + '\'' +
                ", color='" + color + '\'' +
                ", originalPrice='" + originalPrice + '\'' +
                ", price='" + price + '\'' +
                ", title='" + title + '\'' +
                ", goods_describe='" + goods_describe + '\'' +
                ", agree='" + agree + '\'' +
                ", url='" + url + '\'' +
                ", number='" + number + '\'' +
                '}';
    }
}
