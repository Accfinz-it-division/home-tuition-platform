package lk.hometuition.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // CSRF (Cross-Site Request Forgery) ப்ரொடெக்ஷனை டிஸேபிள் பண்றோம் (API-க்கு இது தேவை இல்லை)
            .csrf(AbstractHttpConfigurer::disable)
            
            // CORS (Cross-Origin Resource Sharing) செட் பண்றோம் (Next.js Frontend-ஐ அனுமதிக்க)
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // அனுமதி (Authorization) விதிகள்
                        .authorizeHttpRequests(auth -> auth
                // 🚀 CORS மற்றும் எல்லா API-க்கும் அனுமதி கொடுக்கிறோம் (Development-க்கு மட்டும்)
                .requestMatchers("/api/**").permitAll()
                .anyRequest().authenticated()
            );
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(
    "http://localhost:3000", 
    "https://home-tuition-platform-one.vercel.app"
)); configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}