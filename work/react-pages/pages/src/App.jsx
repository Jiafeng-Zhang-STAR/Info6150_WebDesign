import './App.css';
import {useState} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [page , setPage] = useState('/chinesechess.html');

  function changePage(event){
    event.preventDefault();
    const targetPage = (event.target.getAttribute('href'))||(event.target.getAttribute('id'));
    setPage(targetPage);
}

  return(
    <div className="app">
      <Header changePageToHeader={changePage}/>
      <Main page={page} changePageToMain={changePage}/>
      <Footer/>
    </div>
  );
}

export default App;