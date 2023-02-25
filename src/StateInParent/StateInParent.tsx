import { useState } from 'react';
import Counter from './Counter';

const StateInParent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <section>
      <h2>Pass counter via props</h2>
      <Counter>
        <Counter.DecrementButton
          decrement={() => setCounter((prev) => prev - 1)}
        />
        <Counter.Text counter={counter} />
        <Counter.IncrementButton
          increment={() => setCounter((prev) => prev + 1)}
        />
      </Counter>
    </section>
  );
};

export default StateInParent;
