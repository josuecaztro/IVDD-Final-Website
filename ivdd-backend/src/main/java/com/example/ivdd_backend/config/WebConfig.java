package com.example.ivdd_backend.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*
THIS WEB CONFIG FILE IS REALLY IMPORTANT. WITH THIS,
I DON'T HAVE TO ADD CROSS ORIGIN ANNOTATION ON TOP OF EVERY CONTROLLER/ENTITY I MAKE
THIS ALLOWS MY DOMAIN TO HAVE CORS ACCESS TO WHATEVER NEW ENDPOINT/ENTITY I CREATE NOW
 */

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/api/**")
//                .allowedOrigins("http://localhost:3000")
                .allowedOrigins("https://www.iglesiavozdedios.net", "https://iglesiavozdedios.net", "http://localhost:3000", "localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

}
