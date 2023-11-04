import Stack from '../Stack';
import useCounter from './vm';
import './styles.css';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <Stack className="counter">
      <Stack direction="row" alignItems="center">
        <button aria-label="decrement" onClick={decrement}>
          -
        </button>
        <div className="count" data-testid="count">
          {count}
        </div>
        <button aria-label="increment" onClick={increment}>
          +
        </button>
      </Stack>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </Stack>
  );
};

export default Counter;
