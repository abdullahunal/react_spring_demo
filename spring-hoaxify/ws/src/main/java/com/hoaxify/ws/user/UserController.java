package com.hoaxify.ws.user;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class UserController {

	@Autowired
	UserService userService;

	// @ResponseStatus(HttpStatus.CREATED) // Status 200 OK yerine 201 CREATED
	// dönecek
	@PostMapping("/api/1.0/users") // isimlendirme: api / versiyon / veriler
	public GenericResponse createUser(@Valid @RequestBody User user) {
		
		/* ApiError error = new ApiError(400, "Validation Error", "/api/1.0/users");
		 * Map<String, String> validationErrors = new HashMap<>(); String username =
		 * user.getUsername(); String displayName = user.getDisplayName();
		 * 
		 * if (username == null || username.isEmpty()) {
		 * validationErrors.put("username", "Username cannot be null"); }
		 * 
		 * if (displayName == null || displayName.isEmpty()) {
		 * validationErrors.put("displayName", "Cannot be null"); }
		 * 
		 * if (validationErrors.size() > 0) {
		 * error.setValidationErrors(validationErrors); return
		 * ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error); }
		 */

		userService.save(user);
		return new GenericResponse("user created");
	}

//	@ExceptionHandler(MethodArgumentNotValidException.class)
//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	public ApiError handleValidationException(MethodArgumentNotValidException exception) {
//		ApiError error = new ApiError(400, "Validation error", "/api/1.0/users");
//		Map<String, String> validationErrors = new HashMap<>();
//		for (FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
//			validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
//		}
//		error.setValidationErrors(validationErrors);
//		return error;
//	}
}
