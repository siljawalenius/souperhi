
import './singlesoup.css';
import Header from './header'
import Recipe from './recipe'
import SoupPic from './soupPic'
import Footer from './footer'

function SingleSoup() {
  return (
    <div className="SingleSoup">
      <Header></Header>
      <Recipe></Recipe>
      <SoupPic></SoupPic>
      <Footer></Footer>
    </div>
  );
}

export default SingleSoup;
