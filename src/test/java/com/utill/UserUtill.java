package com.utill;

import com.model.User;

/**
 * Created by Kyza on 11.01.2016.
 */
public class UserUtill {
    public static User createUser() {
        User user = new User();
        user.setFirstName("Opa");

        return user;
    }
}
