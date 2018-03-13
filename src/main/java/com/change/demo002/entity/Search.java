package com.change.demo002.entity;

import java.util.List;

public class Search {
    private List<String> data;

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    private String search;
    private String userId;
    private String username;

    public Search(){
    }

    public Search(String search, String userId, String username) {
        this.search=search;
        this.userId=userId;
        this.username= username;
    }

    public String getSearch() {
        return search;
    }

    public void setSearch(String search) {
        this.search = search;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
