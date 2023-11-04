import useCounter from './vm';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
