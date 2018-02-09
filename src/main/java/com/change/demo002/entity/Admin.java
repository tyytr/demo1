package com.change.demo002.entity;

import java.util.List;

public class Admin {
    private List<String> data;

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    private String notice_id;
    private String id;
    private String username;
    private String notice;
    private String time;
    private String key;

    public String getNotice_id() {
        return notice_id;
    }

    public void setNotice_id(String notice_id) {
        this.notice_id = notice_id;
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

    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
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

    public Admin(){

    }

    public Admin(String notice_id, String id, String username, String notice, String time, String key) {
        this.notice_id = notice_id;
        this.id = id;
        this.username = username;
        this.notice = notice;
        this.time = time;
        this.key = key;
    }

    @Override
    public String toString() {
        return "Person{" +
                "notice_id='" + notice_id + '\'' +
                ", id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", notice='" + notice + '\'' +
                ", time='" + time + '\'' +
                ", key='" + key + '\'' +
                '}';
    }
}
