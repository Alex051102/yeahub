import { useEffect, useState } from 'react';

export const useDebounce = (text: string, delay: number) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(text);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [text, delay]);

  return value;
};
