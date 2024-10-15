package com.example.ivdd_backend.Controllers;
import com.example.ivdd_backend.Models.ContactForm;
import com.example.ivdd_backend.Models.PrayerRequestForm;
import com.example.ivdd_backend.Repositories.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/contact-requests/{id}")
    public ResponseEntity<ContactForm> getContactFormById(@PathVariable Long id) {
        return repository.findById(id)
                .map(contactForm -> new ResponseEntity<>(contactForm, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @DeleteMapping("/contact-requests/{id}")
    public ResponseEntity<Void> deleteContactForm(@PathVariable Long id){
        if (repository.existsById(id)){
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
