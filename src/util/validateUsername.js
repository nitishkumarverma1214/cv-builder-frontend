export const validateUsername = (username) => {
  var validRegex = /^(?=.{3,10}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  return !validRegex.test(username);
};
