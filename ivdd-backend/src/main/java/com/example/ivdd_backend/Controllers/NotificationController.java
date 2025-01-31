package com.example.ivdd_backend.Controllers;

import com.example.ivdd_backend.Repositories.SubscriberRepository;
import com.example.ivdd_backend.Services.SubscriberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class NotificationController {

    @Autowired
    private SubscriberRepository repository;

    @Autowired
    private SubscriberService service;

    @PostMapping("/send-alert")
    public ResponseEntity<String> sendAlerts(){
        String msg = "Live service starting now! Join here: [MOCK LINK]";

        repository.findAll().forEach(s ->
                service.sendSMS(s.getPhoneNumber(), msg)
                );

        return ResponseEntity.ok("Alerts sent!");
    }


}
