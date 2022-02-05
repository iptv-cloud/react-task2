import Counter from './Components/Counter';
import { Component ,useState} from 'react';
function App() {

  const [count,setCount] = useState(42)

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
