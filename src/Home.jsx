
import Header from './Header';
import Services from './Services';
import Specialities from './Specialities';
import Footer from './Footer';
import NavBar from "./NavBar";
import './App.css';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Services />
      <Specialities />
      <Footer />
    </div>
  );
}

export default Home;
