package com.hoaxify.ws.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.shared.CurrentUser;
import com.hoaxify.ws.shared.Views;
import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.UserRepository;

@RestController
public class AuthController {

	@Autowired
	UserRepository userRepository;

	// PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@PostMapping("/api/1.0/auth")
	@JsonView(Views.Base.class)
	ResponseEntity<?> handleAuthentication(@CurrentUser User user) {		
		return ResponseEntity.ok(user);
		
		/*
		 * if (authorization == null) { ApiError error = new ApiError(401,
		 * "Unauthorized request", "/api/1.0/auth"); return
		 * ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error); }
		 */
		
//		String base64encoded = authorization.split("Basic ")[1];
//		String decoded = new String(Base64.getDecoder().decode(base64encoded));
//		String[] parts = decoded.split(":");
//		String username = parts[0];
		// String password = parts[1];
		/*
		 * if (inDB == null) { ApiError error = new ApiError(401,
		 * "Unauthorized request", "/api/1.0/auth"); return
		 * ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error); } String
		 * hashedPassword = inDB.getPassword(); if (!passwordEncoder.matches(password,
		 * hashedPassword)) { ApiError error = new ApiError(401, "Unauthorized request",
		 * "/api/1.0/auth"); return
		 * ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error); }
		 */
//		Map<String, String> responseBody = new HashMap<>();
//		responseBody.put("username", inDB.getUsername());
//		responseBody.put("displayName", inDB.getDisplayName());
//		responseBody.put("image", inDB.getImage());
	}
}
