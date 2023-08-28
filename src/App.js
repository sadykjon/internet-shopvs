import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container d-flex mt-2 justify-content-around'>
        <div className='col-2' >
          <Nav/>
        </div>
        <div className='col-8 main'>
          <Main/>
        </div>
      </div>

    </div>
  );
}

export default App;
