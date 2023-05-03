export const validateEmail = (email) => {
  var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return !validRegex.test(email);
};
