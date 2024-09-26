package com.example.ivdd_backend.Controllers;
import com.example.ivdd_backend.Models.ContactForm;
import com.example.ivdd_backend.Repositories.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://www.iglesiavozdedios.net", "http://iglesiavozdedios.net"}) //this allows route 53 to allow api calls
@RestController
@RequestMapping("/api")
public class ContactFormController {

    @Autowired
    private ContactFormRepository repository;

    @PostMapping("/contact-requests")
    public ResponseEntity<ContactForm> createContactForm(@RequestBody ContactForm form) {
        ContactForm savedForm = repository.save(form);
        return ResponseEntity.ok(savedForm);
    }

    @GetMapping("/contact-requests")
    public List<ContactForm> getAllPrayerRequests() {
        return repository.findAll();
    }
}
