import { render, screen } from '@testing-library/react';
import Counter from './';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('renders counter with initial value equal to 0', () => {
    render(<Counter />);
    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('0');
  });

  it('increments count on click of increment button', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementBtn);

    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('1');
  });

  it('does not decrement count less than 0', async () => {
    render(<Counter />);

    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('0');

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    await userEvent.click(decrementBtn);

    expect(count).toHaveTextContent('0');
  });

  it('decrements count on click of increment button', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    await userEvent.click(decrementBtn);

    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('1');
  });

  it('resets count to 0 on click of reset button', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('2');

    const resetBtn = screen.getByRole('button', { name: /reset/i });
    await userEvent.click(resetBtn);

    expect(count).toHaveTextContent('0');
  });
});
