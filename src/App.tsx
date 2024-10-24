import './App.css';
import { Alert } from './Alert';

function App() {
  return (
    <div className="App">
      <Alert heading="Success" closable>
        Wszystko działa!
      </Alert>
    </div>
  );
}

export default App;
