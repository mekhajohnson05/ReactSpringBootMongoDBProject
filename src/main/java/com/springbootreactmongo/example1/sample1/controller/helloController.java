package com.springbootreactmongo.example1.sample1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springbootreactmongo.example1.sample1.entity.Student;
import com.springbootreactmongo.example1.sample1.services.StudServices;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController

public class helloController {
	@Autowired
	StudServices ss;
	
	
	
	@RequestMapping(value = "/save",method = RequestMethod.POST)
	public Student save(@RequestBody Student s) {
	
		ss.saveStud(s);
		
		return s;
	}
	
	@RequestMapping(value = "/viewall",method = RequestMethod.GET)
	public List<Student> viewbyname() {
	List<Student> li= ss.getallbyname();
	return li;
	}
	
	

}
