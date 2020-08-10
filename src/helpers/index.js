import { useState, useEffect } from 'react';

export const useDebounced = (defaultValue = '', delay = 300) => {
  const [value, setValue] = useState(defaultValue);
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return [value, debounced, setValue];
};
