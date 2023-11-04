import useCounter from './vm';

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
