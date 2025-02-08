package com.example.ivdd_backend.Controllers;
import org.springframework.web.bind.annotation.*;
import com.example.ivdd_backend.Models.CreatePayment;
import com.example.ivdd_backend.Services.PaymentService;


import java.util.Map;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create-payment-intent")
    public Map<String, String> createPaymentIntent(@RequestBody CreatePayment paymentRequest) {
        try {
            return paymentService.createPaymentIntent(paymentRequest);
        } catch (Exception e) {
            throw new RuntimeException("Error creating PaymentIntent: " + e.getMessage());
        }
    }
}
