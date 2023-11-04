import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevVal) => prevVal + 1);
  };

  const decrement = () => {
    setCount((prevVal) => {
      if (prevVal <= 0) return 0;
      return prevVal - 1;
    });
  };

  return { count, increment, decrement };
};

export default useCounter;
