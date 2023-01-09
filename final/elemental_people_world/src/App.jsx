import './App.css';
import {useState} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [page , setPage] = useState('/Main1ElementalPeopleImage.html');
  const [theme , setTheme] = useState("golden");

  function changePage(event){
    event.preventDefault();
    const targetPage = (event.target.getAttribute('href'))||(event.target.getAttribute('id'));
    setPage(targetPage);
}

function changeColor(event){
  event.preventDefault();
  const targetPage = (event.target.getAttribute('href'));
  setTheme(targetPage);
}

  return(
    <div className={`app ${theme}`}>
      <a className="skiplink" href="#main">Skip to Content</a>
      <Header changePageToHeader={changePage} changeColor={changeColor} theme={theme}/>
      {console.log(theme)}
      <Main page={page} changePageToMain={changePage}/>
      <Footer changePageToFooter={changePage} theme={theme}/>
    </div>
  );
}

export default App;