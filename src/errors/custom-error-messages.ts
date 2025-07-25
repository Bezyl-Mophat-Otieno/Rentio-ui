import { AxiosError } from "axios";

export const getGenericErrorMessage = (error: Error): string => {
  const axiosError = error as AxiosError;

  if (axiosError.response) {
    // Server responded with a status code outside the 2xx range
    switch (axiosError.response.status) {
      case 400:
        return "Oops! It seems there's an issue with the information you provided. Please check and try again.";
      case 401:
        return "Incorrect email or password. Please double-check your credentials.";
      case 403:
        return "You don't have permission to access this resource.";
      case 404:
        return "We couldn't find what you're looking for. Please check the URL or try again later.";
      case 500:
        return "We're experiencing some technical issues. Please try again shortly.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  } else if (axiosError.request) {
    // Request was made but no response received
    return "Unable to connect to the server. Please check your internet connection.";
  } else {
    // Something else happened while setting up the request
    return `An error occurred: ${axiosError.message}`;
  }
};

export const getLoginErrorMessage = (error: Error): string => {
  const axiosError = error as AxiosError;

  if (axiosError.response) {
    // Server responded with a status code outside the 2xx range
    switch (axiosError.response.status) {
      case 400:
        return "The information provided is invalid. Please double-check your email and password.";
      case 401:
        return "Authentication failed. Incorrect email or password. Please try again.";
      case 403:
        return "Your account does not have the necessary permissions to access this resource.";
      case 404:
        return "We couldn't find an account associated with this email. Please sign up if you don't have an account.";
      case 429:
        return "Too many login attempts. Please wait a few minutes before trying again.";
      case 500:
        return "There seems to be an issue on our end. Please try again later.";
      default:
        return "Something went wrong during login. Please try again.";
    }
  } else if (axiosError.request) {
    // Request was made but no response received
    return "We couldn't connect to the server. Please check your internet connection and try again.";
  } else {
    // Something else happened while setting up the request
    return `An error occurred: ${axiosError.message}`;
  }
};

export const getRegistrationErrorMessage = (error: Error): string => {
  const axiosError = error as AxiosError;

  if (axiosError.response) {
    // Server responded with a status code outside the 2xx range
    switch (axiosError.response.status) {
      case 400:
        // Server-side validation issues or missing fields
        return "There seems to be a problem with the information you provided. Please review your inputs.";
      case 401:
        // Unauthorized or bad credentials (though not typical for registration)
        return "Your session has expired or you're not authorized. Please log in again.";
      case 403:
        // Forbidden access (e.g., attempting to register with a restricted role)
        return "You are not allowed to perform this action. Please contact support.";
      case 404:
        // Endpoint not found or similar issues
        return "The registration service is currently unavailable. Please try again later.";
      case 409:
        // Conflict error, often for duplicate email or username
        return "An account with this email already exists. Please try logging in or use a different email.";
      case 422:
        // Unprocessable entity, possibly due to failed validation (e.g., weak password)
        return "Your password doesn't meet the security requirements. Please choose a stronger password.";
      case 500:
        // Server error
        return "Our servers are currently facing some issues. Please try registering again in a few moments.";
      default:
        // Any other errors
        return "An unexpected error occurred during registration. Please try again.";
    }
  } else if (axiosError.request) {
    // No response received from the server
    return "We couldn't reach the server. Please check your internet connection and try again.";
  } else {
    // Something else happened during the request setup
    return `Registration error: ${axiosError.message}`;
  }
};
