package com.example.ivdd_backend.Repositories;

import com.example.ivdd_backend.Models.PrayerRequestForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PrayerRequestFormRepository extends JpaRepository <PrayerRequestForm, Long> {
}
