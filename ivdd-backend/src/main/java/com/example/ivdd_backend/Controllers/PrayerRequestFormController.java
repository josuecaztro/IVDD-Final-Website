package com.example.ivdd_backend.Controllers;


import com.example.ivdd_backend.Models.PrayerRequestForm;
import com.example.ivdd_backend.Repositories.PrayerRequestFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://18.119.7.144") //this allows port from React to allow api calls
@RestController
@RequestMapping("/api")
public class PrayerRequestFormController {

    @Autowired
    private PrayerRequestFormRepository repository;

    @PostMapping("/prayer-request-forms")
    public ResponseEntity<PrayerRequestForm> createPrayerRequestForm(@RequestBody PrayerRequestForm form) {
        PrayerRequestForm savedForm = repository.save(form);
        return ResponseEntity.ok(savedForm);
    }

    @GetMapping("/prayer-request-forms")
    public List<PrayerRequestForm> getAllPrayerRequests() {
        return repository.findAll();
    }



}
