package com.springbootreactmongo.example1.sample1.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.springbootreactmongo.example1.sample1.entity.Student;



public interface StudRepo extends MongoRepository<Student, String> {

	 List<Student> findByOrderByNameAsc();

}
