import './App.css';
import Main from './components/Main';
import Header from './components/header/Header';
import Vnutrichnia from './components/vnutrichnia/Vnutrichnia';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Garrison from './components/garrison/Garrison';
import Guard from './components/guard/Guard';
function App() {
  return (
    <div className="App">
     <Header></Header>  
      <Router>
        <Routes> 
        <Route exact path="/"    element={<Main/>}/>
          <Route exact path="/internal-serve"    element={<Vnutrichnia/>}/>
          <Route exact path="/garrisone-serve"    element={<Garrison/>}/>
          <Route exact path="/guard-serve"    element={<Guard/>}/>
        </Routes>
      </Router>
      <a className='link-to-statut '  target="_blank" href='https://zakon.rada.gov.ua/laws/show/550-14#Text'>Статут гарнізонної та вартової служб Збройних Сил України</a>
      <Footer></Footer>
    </div>
  );
}

export default App;
