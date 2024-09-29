export const handleForm = (email, password) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (isEmail === false) {
    return "email is not valid";
  }

  if (isPassword === false) {
    return "password is not valid";
  }

  return null;
};
