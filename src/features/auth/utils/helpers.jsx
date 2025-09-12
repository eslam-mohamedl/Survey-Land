export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const formatUserData = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});