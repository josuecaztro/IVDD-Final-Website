package com.example.ivdd_backend.Services;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SubscriberService {

    // Load credentials from my application.properties
    @Value("${twilio.account_sid}")
    private String ACCOUNT_SID;

    @Value("${twilio.auth_token}")
    private String AUTH_TOKEN;

    @Value("${twilio.phone_number}")
    private String TWILIO_PHONE_NUMBER;

    public void sendSMS(String phoneNumber, String message) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        Message.creator(
                new com.twilio.type.PhoneNumber(phoneNumber), // To
                new com.twilio.type.PhoneNumber(TWILIO_PHONE_NUMBER), // From
                message
        ).create();

        System.out.println("✅ SMS sent to: " + phoneNumber);
    }
}


// EVERYTHING BELOW WAS TO TEST A MOCK SMS


//import org.springframework.stereotype.Service;
//
//@Service
//public class SubscriberService {
//    public void sendSMS(String to, String messageBody){
//        System.out.println("MOCK SMS: SENDING TO " + to + " | " + "Message: " + messageBody);
//    }
//}
