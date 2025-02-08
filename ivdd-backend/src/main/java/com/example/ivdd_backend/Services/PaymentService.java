package com.example.ivdd_backend.Services;
import com.example.ivdd_backend.Models.CreatePayment;
import com.example.ivdd_backend.Models.CreatePaymentItem;
import com.example.ivdd_backend.Models.CreatePaymentResponse;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentService {

    public PaymentService(@Value("${stripe_publishable_key}") String myApiKey) {
        // Set Stripe API key
        Stripe.apiKey = System.getenv("STRIPE_PUBLISHABLE_KEY");
    }

    private int calculateOrderAmount(CreatePaymentItem[] items) {
        int total = 0;
        for (CreatePaymentItem item : items) {
            total += item.getAmount();
        }
        return total;
    }

    public Map<String, String> createPaymentIntent(CreatePayment paymentRequest) throws Exception {
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount((long) calculateOrderAmount(paymentRequest.getItems()))
                .setCurrency("usd")
                .setAutomaticPaymentMethods(
                        PaymentIntentCreateParams.AutomaticPaymentMethods.builder()
                                .setEnabled(true)
                                .build()
                )
                .build();

        PaymentIntent paymentIntent = PaymentIntent.create(params);

        Map<String, String> response = new HashMap<>();
        response.put("clientSecret", paymentIntent.getClientSecret());
        response.put("paymentIntentId", paymentIntent.getId());

        return response;
    }
}
