import './App.css';
import Lotto from './Lotto'
function App() {
  return (
    <div className="App">
      <Lotto title={'Lottery'} numBalls={7} />
      <Lotto title={'Daily Double'} numBalls={5} />
    </div>
  );
}

export default App;
