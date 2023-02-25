import './App.css';
import StateInParent from './StateInParent/StateInParent';
import StateInContext from './StateInContext/StateInContext';

/**
 * ref: https://medium.com/@roshni.devadiga/react-design-pattern-compound-components-4c14d13785d2
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateInParent />
        <StateInContext />
      </header>
    </div>
  );
}

export default App;
