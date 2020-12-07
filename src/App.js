import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Recipe from './components/recipe'
import SoupPic from './components/soupPic'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Recipe></Recipe>
      <SoupPic></SoupPic>
    </div>
  );
}

export default App;
