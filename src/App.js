import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainer';
function App() {
  return (
    <div className="App">
    <h1>App Component</h1>
    <User data={{name:"Anushka chauhan" , age:21}}/>
    <HomeContainer/>
    </div>
  );
}

export default App;
