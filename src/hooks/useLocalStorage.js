import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialValue
  );

  const setItem = (newValue) => {
    setValue(newValue);
  };

  const removeItem = () => {
    setValue(null);
  };

  useEffect(() => {
    try {
      if (value) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(
        `Failed to add the key value pair - ${key}:${value} to localStorage: ${error}`
      );
    }
  }, [value]);

  return [value, setItem, removeItem];
};
