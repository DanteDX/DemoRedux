import Information from "./components/Information/Information.js";
import './App.css';

function App() {
  return (
    <div data-testid="appWrapper">
      <Information />
      <button data-testid="appButton">One</button>
      <button data-testid="appButton">Two</button>
    </div>
  );
}

export default App;
