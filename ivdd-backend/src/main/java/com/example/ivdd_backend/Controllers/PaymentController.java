package com.example.ivdd_backend.Controllers;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
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

    //JUST FOR TESTING - DELETE LATER
    @GetMapping("/test-stripe")
    public String testStripe() {
        try {
            PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                    .setAmount(1000L) // $10.00
                    .setCurrency("usd")
                    .build();
            PaymentIntent intent = PaymentIntent.create(params);
            return "✅ Stripe Test Passed! Intent ID: " + intent.getId();
        } catch (Exception e) {
            return "❌ Stripe Test Failed: " + e.getMessage();
        }
    }

}
