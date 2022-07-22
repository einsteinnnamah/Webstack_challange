
import './App.css';
import Button from './Button';
const App = () => {
  
  const name = 'Webstack Challange';
  return (
    <div className="App">
      <h1>Hello this is the {name}</h1>
      <Button alertText="Welcome to a new future" />
      <p></p>
    </div>

  );
}

export default App;
 