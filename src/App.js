import logo from './logo.svg';
import './App.css';
import CountryInvoke from "./component/CountryInvoke"
import ErrorRecovery from "./component/ErrorRecovery"

function App() {
  return (
    <div>
    <CountryInvoke />
    <ErrorRecovery />
    </div>
  );
}

export default App;
