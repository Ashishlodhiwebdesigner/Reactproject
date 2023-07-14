import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import NewAstrologer from './Pages/NewAstrologer';
import PopularAstrologer from './Pages/PopularAstrologer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import TopFeatured from './Pages/TopFeatured';
import Products from './Pages/Products';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
       <Routes>
          <Route path='/'  element={< Home/>}></Route>
          <Route path='/About'  element={< About/>}></Route>
          <Route path='/TopFeatured' element={< TopFeatured/>}></Route>
          <Route path='/NewAstrologer'  element={< NewAstrologer/>}></Route>
          <Route path='/PopularAstrologer'  element={< PopularAstrologer/>}></Route>
          <Route path='/Products'  element={< Products/>}></Route>
          <Route path='/*'  element={< NotFound/>}></Route>
        </Routes>  
        <Footer></Footer>     
    </BrowserRouter>
  );
}

export default App;
