import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header from './components/header/Header';
import PageHeader from './components/header/PageHeader';
import Hero from './components/hero/Hero';
import About from './components/About';
import Recipes from './components/Recipes';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Events from './components/Events';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <PageHeader />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/recipes' element={<Recipes />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
