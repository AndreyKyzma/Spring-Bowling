package com.service;

import com.model.User;

import java.util.List;


/**
 * Created by Kyza on 11.01.2016.
 */
public interface UserService {
    User addUser(User user);
    void delete(long id);
    User getByName(String name);
    User editUser(User user);
    List<User>getAll();

}
