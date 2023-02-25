import { useContext, useState, createContext } from 'react';

type TypeCountContext = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const CountContext = createContext<TypeCountContext>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  return (
    <CountContext.Provider value={{ counter, increment, decrement }}>
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
    </CountContext.Provider>
  );
};

const CounterText = () => {
  const { counter } = useContext<TypeCountContext>(CountContext);
  return <span style={{ fontWeight: 700 }}>{counter} </span>;
};

const IncrementButton = () => {
  const { increment } = useContext<TypeCountContext>(CountContext);
  return <button onClick={increment}>+</button>;
};

const DecrementButton = () => {
  const { decrement } = useContext<TypeCountContext>(CountContext);
  return <button onClick={decrement}>-</button>;
};

Counter.Text = CounterText;
Counter.IncrementButton = IncrementButton;
Counter.DecrementButton = DecrementButton;

export default Counter;
