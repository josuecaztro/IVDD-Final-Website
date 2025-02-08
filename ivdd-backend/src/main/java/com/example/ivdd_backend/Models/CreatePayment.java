package com.example.ivdd_backend.Models;
import com.google.gson.annotations.SerializedName;

public class CreatePayment {
    @SerializedName("items")
    private CreatePaymentItem[] items;

    public CreatePaymentItem[] getItems() {
        return items;
    }
}
