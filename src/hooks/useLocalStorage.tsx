export const useLocalStorage = () => {
  const saveToLocalStorage = (key: string, value: string) =>
    localStorage.setItem(key, value);

  const getFromLocalStorage = (key: string) => localStorage.getItem(key);

  const removeFromLocalStorage = (key: string) => localStorage.removeItem(key);

  return { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
};
