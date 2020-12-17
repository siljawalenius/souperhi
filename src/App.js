
import './App.css';
import Header from './components/header'
import Recipe from './components/recipe'
import SoupPic from './components/soupPic'
import Footer from './components/footer'
import Router from './components/Router'

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Recipe></Recipe>
      <SoupPic></SoupPic>
      <Footer></Footer> */}
      <Router/>
    </div>
  );
}

export default App;
