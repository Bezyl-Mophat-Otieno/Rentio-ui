const auth = {
  login: process.env.RENTIN_API_URL + "/auth/login",
  logout: process.env.RENTIN_API_URL + "/auth/logout",
  register: process.env.RENTIN_API_URL + "/auth/register",
  refreshToken: process.env.RENTIN_API_URL + "/auth/refresh-token",
  forgotPassword: process.env.RENTIN_API_URL + "/auth/forgot-password",
  resetPassword: process.env.RENTIN_API_URL + "/auth/reset-password",
};

export default auth;
