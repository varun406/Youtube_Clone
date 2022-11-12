export const createError = (message) => {
  const err = new Error();
  err.message = message;
  return err;
};
