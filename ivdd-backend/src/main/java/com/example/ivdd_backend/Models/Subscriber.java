package com.example.ivdd_backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Subscriber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Add an annotation to this instance variable to be UNIQUE=TRUE & NULLABLE=false
    private String phoneNumber;

    public Subscriber(){} //Just a nullary constructor. In case needed

    public Subscriber(String phoneNumber){
        this.phoneNumber = phoneNumber; //Not sure if constructors needed in general?
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }




//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String firstName;
//    private String lastName;
//    private String phoneNumber;
//    private String messageBody;
//    private String dateTime;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }

}
