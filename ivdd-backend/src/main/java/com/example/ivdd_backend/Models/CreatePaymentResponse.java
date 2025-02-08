package com.example.ivdd_backend.Models;

public class CreatePaymentResponse {
    private String clientSecret;
    private String paymentIntentId;

    public CreatePaymentResponse(String clientSecret, String paymentIntentId) {
        this.clientSecret = clientSecret;
        this.paymentIntentId = paymentIntentId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public String getPaymentIntentId() {
        return paymentIntentId;
    }
}
