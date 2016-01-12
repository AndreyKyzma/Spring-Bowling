package com.repository;

import com.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Created by Kyza on 11.01.2016.
 */
public interface UserRepo extends JpaRepository<User,Long> {
    @Query("select b from User b where  b.firstName =:firstName")
    User findByName(@Param("firstName") String firstName);
}
