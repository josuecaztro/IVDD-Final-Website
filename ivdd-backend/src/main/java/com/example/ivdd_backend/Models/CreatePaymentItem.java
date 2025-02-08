package com.example.ivdd_backend.Models;
import com.google.gson.annotations.SerializedName;


public class CreatePaymentItem {
    @SerializedName("id")
    private String id;

    @SerializedName("amount")
    private Long amount;

    public String getId() {
        return id;
    }

    public Long getAmount() {
        return amount;
    }
}
