export const validatePassword = (password) => {
  // password of length 8 or more with one digit one special character
  // one lower and uppercase letter

  var validRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const res = !validRegex.test(password);
  return res;
};
