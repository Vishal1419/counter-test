import './App.css';
import Counter from './components/Counter';
import Stack from './components/Stack';

function App() {
  return (
    <Stack justifyContent="center" alignItems="center" className="app">
      <Counter />
    </Stack>
  );
}

export default App;
