package com.springbootreactmongo.example1.sample1.entity;



import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="stud")
public class Student {

	

	public static final String SEQUNCE_NAME="Stud_Sequnce";
    @Id
	private String stud_roll;
	private String name;
	private LocalDate dob;
	private String cls;
	private String division;
	private String gender;
	public String getId() {
		return stud_roll;
	}
	public void setId(String id) {
		this.stud_roll = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getCls() {
		return cls;
	}
	public void setCls(String cls) {
		this.cls = cls;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
}
