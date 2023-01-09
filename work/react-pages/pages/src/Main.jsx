import './Main.css';

import Main1ChineseChess from "./Main1ChineseChess";
import Main2InternationalChess from "./Main2InternationalChess";
import Main3GoChess from "./Main3GoChess";
import Main4StrongestChessPlayer from "./Main4StrongestChessPlayer";

function Main({page,changePageToMain}) {
    return(
        <main>
            {(page === '/chinesechess.html') && <Main1ChineseChess changePageToMain1={changePageToMain} />}
            {(page === '/internationalchess.html') && <Main2InternationalChess changePageToMain2={changePageToMain} />}
            {(page === '/gochess.html') && <Main3GoChess changePageToMain3={changePageToMain} />}
            {(page === '/strongestchessplayer.html') && <Main4StrongestChessPlayer />}
        </main>
    );
}

export default Main;