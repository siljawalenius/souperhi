
import './App.css';
import Header from './components/header'
import Recipe from './components/recipe'
import SoupPic from './components/soupPic'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Recipe></Recipe>
      <SoupPic></SoupPic>
      <Footer></Footer>
    </div>
  );
}

export default App;
