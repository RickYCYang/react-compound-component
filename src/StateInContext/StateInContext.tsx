import Counter from './Counter';

const StateInContext = () => {
  return (
    <section>
      <h2>Pass counter via useContext</h2>
      <Counter>
        <Counter.DecrementButton />
        <Counter.IncrementButton />
        <Counter.Text />
      </Counter>
    </section>
  );
};

export default StateInContext;
