// public routes , routes that do not need authentication
export const publicRoutes: string[] = [];

//protected routes, routes that need authentication
export const protectedRoutes: string[] = ["/"];

//routes that are accessible to the public need to sign in
export const authRoutes: string[] = ["/auth/sign-in"];

//route that start with /api/auth prefix do not require authentication
export const apiAuthPrefix: string = "/api/auth";

//Redirect to home page after login
export const DEFAULT_LOGIN_REDIRECT = "/"; 