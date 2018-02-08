package com.change.demo002.entity;

public class User {

    private Integer id;
    private String username;
    private String phone;
    private String password;
    private String rpassword;
    private String admin;
    private String agree;
    private String remember;
    private Integer key;
    private String authentication;

    public User() {
    }

    public User(Integer id, String username, String phone, String password, String rpassword, String admin, String agree, String remember ,String authentication) {
        this.id = id;
        this.username = username;
        this.phone = phone;
        this.password = password;
        this.rpassword = rpassword;
        this.admin = admin;
        this.agree = agree;
        this.remember = remember;
        this.authentication = authentication;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRpassword() {
        return rpassword;
    }

    public void setRpassword(String rpassword) {
        this.rpassword = rpassword;
    }

    public String getAdmin() {
        return admin;
    }

    public void setAdmin(String admin) {
        this.admin = admin;
    }

    public String getAgree() {
        return agree;
    }

    public void setAgree(String agree) {
        this.agree = agree;
    }

    public String getRemember() {
        return remember;
    }

    public void setRemember(String remember) {
        this.remember = remember;
    }

    public Integer getKey() {
        return key;
    }

    public void setKey(Integer key) {
        this.key = key;
    }

    public String getAuthentication() {
        return authentication;
    }

    public void setAuthentication(String authentication) {
        this.authentication = authentication;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                ", rpassword='" + rpassword + '\'' +
                ", admin='" + admin + '\'' +
                ", agree='" + agree + '\'' +
                ", remember='" + remember + '\'' +
                ", authentication='" + authentication + '\'' +
                ", key='" + key + '\'' +
                '}';
    }

}
