import './Main.css';

import Main1ElementalPeopleImage from "./Main1ElementalPeopleImage";
import Main2Gallery from "./Main2Gallery";
import Main3WhyIWantToCreateThisPage from "./Main3WhyIWantToCreateThisPage";

function Main({page,changePageToMain}) {
    return(
        <>
        <main id = "main">
            {(page === '/Main1ElementalPeopleImage.html') && <Main1ElementalPeopleImage changePageToMain1={changePageToMain} />}
            {(page === '/Main2Gallery.html') && <Main2Gallery changePageToMain2={changePageToMain} />}
            {(page === '/Main3WhyIWantToCreateThisPage.html') && <Main3WhyIWantToCreateThisPage changePageToMain3={changePageToMain} />}
        </main>
        </>
    );
}

export default Main;                    