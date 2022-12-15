
export const regExp = {
  email: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
}

export const emailValidation = (value?: string) => {
  if (!value) return false;
  return regExp.email.test(value);
}
