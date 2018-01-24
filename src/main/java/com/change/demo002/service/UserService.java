package com.change.demo002.service;

import com.change.demo002.entity.User;

public interface UserService {
    boolean insertUser(User user);

    User loginUser(User user);
}
