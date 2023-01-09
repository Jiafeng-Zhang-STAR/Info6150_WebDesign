import chineseChess1 from './images/2_chineseChess.jpg'; 
import chineseChess2 from './images/3_chineseChess.jpg'; 
import chineseChess3 from './images/4_chineseChess.jpg'; 

function Main1ChineseChess({changePageToMain1}){
    return (
<div className="card__part">
            <div className="card card_1">
                <h2 className="card__title">Scenes under Chinese chess</h2>
                <img src={chineseChess1} alt="This is the chess scene" className="card__picture"/>
                <div className="card__text">
                Teahouse inside are able to play chess, is a good place for leisure time and friends and partners to play a game of chess, sip tea and chat, but also a chess and why not do it!
                <p>You can click here to see
                    <a className="strongest-player__link" href={"/strongestchessplayer.html"} onClick={changePageToMain1}> {"World's strongest chess player"} </a>
                    , feel free to browse
                </p>
                </div>
            </div>

            <div className="card card_2">
                <h2 className="card__title">Chinese Chess Rules</h2>
                <img src={chineseChess2} alt="This is the chess board of Chinese chess" className="card__picture"/>
                <div className="card__text">
                As in Western chess, the object of Chinese chess is to capture the opponent's king (also called general in Chinese chess), and each player starts with an army of 16 pieces (one side traditionally red, which moves first, and the other black) on opposite sides of a game board.
                <p>You can click here to see
                    <button className="open2" type="button" id={"/strongestchessplayer.html"} onClick={changePageToMain1}>World's strongest chess player</button>
                    , feel free to browse
                </p>
                </div>
            </div>

            <div className="card card_3">
                <h2 className="card__title">Chinese chess popularity</h2>
                <img src={chineseChess3} alt="This is the easiest place to play chess" className="card__picture"/>
                <div className="card__text">
                Chess has only gained popularity in China in the last few decades and still trails Chinese chess (xiangqi) and go (weiqi) by a considerable margin. There are about three million people in China who play chess, of which 300,000 are in the federation.
                <p>You can click here to see
                    <button className="open2" type="button" href={"/strongestchessplayer.html"} onClick={changePageToMain1}>World's strongest chess player</button>
                    , feel free to browse
                </p>
                </div>
            </div>
        </div>
    );
}

export default Main1ChineseChess;