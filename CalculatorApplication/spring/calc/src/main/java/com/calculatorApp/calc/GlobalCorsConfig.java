// package com.calculatorApp.calc;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class GlobalCorsConfig {
//     @Bean
//     public WebMvcConfigurer corsConfigurer() {
//         return new WebMvcConfigurer() {
//             @Override
//             public void addCorsMappings(CorsRegistry registry) {
//                 registry.addMapping("/**") // Applies to all endpoints
//                         .allowedOrigins("*") // Allowed origins
//                         .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed HTTP methods
//                         .allowedHeaders("Content-Type", "Authorization") // Allowed headers
//                         .allowCredentials(true) // Allow sending credentials (cookies, authorization headers)
//                         .maxAge(3600); // Cache preflight response for 1 hour
//             }
//         };
//     }
// }   
