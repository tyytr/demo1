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

    public Search(){
    }

    public Search(String search) {
        this.search=search;
    }
    public String getSearch() {
        return search;
    }

    public void setSearch(String search) {
        this.search = search;
    }
}
