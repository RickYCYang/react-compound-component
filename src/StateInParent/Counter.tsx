import React from 'react';

const Counter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      {children}
    </div>
  );
};

const CounterText = ({ counter }: { counter: number }) => {
  return <span style={{ fontWeight: 700 }}>{counter} </span>;
};

const IncrementButton = ({ increment }: { increment: () => void }) => {
  return <button onClick={increment}>+</button>;
};

const DecrementButton = ({ decrement }: { decrement: () => void }) => {
  return <button onClick={decrement}>-</button>;
};

Counter.Text = CounterText;
Counter.IncrementButton = IncrementButton;
Counter.DecrementButton = DecrementButton;

export default Counter;
