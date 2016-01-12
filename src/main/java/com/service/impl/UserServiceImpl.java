package com.service.impl;

import com.model.User;
import com.repository.UserRepo;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Created by Kyza on 11.01.2016.
 */
@Service
public class UserServiceImpl implements UserService {

   @Autowired
   private UserRepo userRepo;

    @Override
    public User addUser(User user) {
        User savedUser = userRepo.saveAndFlush(user);
        return savedUser;
    }

    @Override
    public void delete(long id) {
    userRepo.delete(id);
    }

    @Override
    public User getByName(String name) {
        return userRepo.findByName(name);
    }

    @Override
    public User editUser(User user) {
        return userRepo.saveAndFlush(user);
    }

    @Override
    public List<User> getAll() {
        return userRepo.findAll();
    }
}
