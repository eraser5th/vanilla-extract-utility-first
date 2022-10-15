export const getAge = (birthDate: Date) => {
  const now = new Date();
  const baseAge = now.getFullYear() - birthDate.getFullYear();

  if (birthDate.getMonth() > now.getMonth()) {
    return baseAge;
  }
  if (
    birthDate.getMonth() === now.getMonth() &&
    birthDate.getDate() >= now.getDate()
  ) {
    return baseAge;
  }
  return baseAge - 1;
};
