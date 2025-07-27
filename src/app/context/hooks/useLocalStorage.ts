"use client";
import { useState, useEffect, useRef } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const isFirstRender = useRef(true);

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error("Ошибка чтения localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Пропустить первую запись
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Ошибка записи localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;
