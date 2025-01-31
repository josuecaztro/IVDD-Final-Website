package com.example.ivdd_backend.Controllers;

import com.example.ivdd_backend.Models.Subscriber;
import com.example.ivdd_backend.Repositories.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class SubscriberController {

    @Autowired
    private SubscriberRepository repository;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Map<String, String> request){
        String phone = request.get("phone");
        if(!repository.existsByPhoneNumber(phone)){
            repository.save(new Subscriber(phone));
        }
        return ResponseEntity.ok("Signed up successfully!");
    }

}
