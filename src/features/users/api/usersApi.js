import api from "@/services/apiClient";

// GET all users (admin only)
export const getUsers = (params) => api.get("/users", params);

// GET single user by ID
export const getUserById = (id) => api.get(`/users/${id}`);

// GET current user profile
export const getCurrentUser = () => api.get("/users/me");

// CREATE new user (registration)
export const createUser = (data) => api.post("/users", data);

// UPDATE user profile
export const updateUser = (id, data) => api.put(`/users/${id}`, data);

// UPDATE current user profile
export const updateCurrentUser = (data) => api.put("/users/me", data);

// DELETE user (admin only)
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Role-specific endpoints
export const getInstructors = () => api.get("/users/instructors");
export const getAdmins = () => api.get("/users/admins");

// User status management
export const activateUser = (id) => api.patch(`/users/${id}/activate`);
export const deactivateUser = (id) => api.patch(`/users/${id}/deactivate`);

// Password management
export const changePassword = (data) => api.put("/users/me/password", data);
export const resetPassword = (email) => api.post("/users/reset-password", { email });

// Profile picture
export const uploadProfilePicture = (formData) => api.post("/users/me/avatar", formData);

// User preferences
export const updatePreferences = (preferences) => api.put("/users/me/preferences", preferences); 