package com.example.ivdd_backend.Services;

import org.springframework.stereotype.Service;

@Service
public class SubscriberService {
    public void sendSMS(String to, String messageBody){
        System.out.println("MOCK SMS: SENDING TO " + to + " | " + "Message: " + messageBody);
    }
}
