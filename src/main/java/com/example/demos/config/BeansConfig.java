package com.example.demos.config;


import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;
@Configuration  // Indique que cette classe est une source de configurations pour l'application Spring
@RequiredArgsConstructor  // Lombok génère un constructeur avec les arguments nécessaires pour les champs 'final'
public class BeansConfig {

    private final UserDetailsService userDetailsService;  // Service utilisé pour récupérer les détails de l'utilisateur

    @Bean  // Indique que cette méthode produit un bean géré par le conteneur Spring
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();  // Crée une instance de DaoAuthenticationProvider
        authProvider.setUserDetailsService(userDetailsService);  // Définit le service utilisé pour charger les détails de l'utilisateur
        authProvider.setPasswordEncoder(passwordEncoder());  // Définit l'encodeur de mots de passe
        return authProvider;  // Retourne le fournisseur d'authentification configuré
    }

    @Bean  // Indique que cette méthode produit un bean géré par le conteneur Spring
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();  // Retourne le gestionnaire d'authentification configuré par Spring
    }


    @Bean  // Indique que cette méthode produit un bean géré par le conteneur Spring
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Retourne une instance de BCryptPasswordEncoder pour le chiffrement des mots de passe
    }
    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
        config.setAllowedHeaders(Arrays.asList(
                HttpHeaders.ORIGIN,
                HttpHeaders.CONTENT_TYPE,
                HttpHeaders.ACCEPT,
                HttpHeaders.AUTHORIZATION
        ));
        config.setAllowedMethods(Arrays.asList(
                "GET",
                "POST",
                "DELETE",
                "PUT",
                "PATCH"
        ));
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);

    }
}
