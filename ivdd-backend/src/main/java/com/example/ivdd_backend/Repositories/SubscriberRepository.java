package com.example.ivdd_backend.Repositories;

import com.example.ivdd_backend.Models.Subscriber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {
    boolean existsByPhoneNumber(String phoneNumber);
}
