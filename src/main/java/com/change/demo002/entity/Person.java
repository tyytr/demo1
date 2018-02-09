package com.change.demo002.entity;

import java.util.List;

public class Person {
    private List<String> data;

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    private String advice_id;
    private String id;
    private String username;
    private String advice;
    private String agree;
    private String disagree;
    private String time;
    private String key;

    public Person(){

    }

    public Person(String advice_id, String id, String username, String advice, String agree, String disagree, String time ,String key) {
        this.advice_id = advice_id;
        this.id = id;
        this.username = username;
        this.advice = advice;
        this.agree = agree;
        this.disagree = disagree;
        this.time = time;
        this.key = key;
    }

    public String getAdvice_id() {
        return advice_id;
    }

    public void setAdvice_id(String advice_id) {
        this.advice_id = advice_id;
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

    public String getAdvice() {
        return advice;
    }

    public void setAdvice(String advice) {
        this.advice = advice;
    }

    public String getAgree() {
        return agree;
    }

    public void setAgree(String agree) {
        this.agree = agree;
    }

    public String getDisagree() {
        return disagree;
    }

    public void setDisagree(String disagree) {
        this.disagree = disagree;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public String toString() {
        return "Person{" +
                "advice_id='" + advice_id + '\'' +
                ", id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", advice='" + advice + '\'' +
                ", agree='" + agree + '\'' +
                ", disagree='" + disagree + '\'' +
                ", time='" + time + '\'' +
                ", key='" + key + '\'' +
                '}';
    }
}
