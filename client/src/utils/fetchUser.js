export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('@sharemeUser') !== undefined
      ? JSON.parse(localStorage.getItem('@sharemeUser'))
      : localStorage.removeItem('@sharemeUser');

  return userInfo;
};
