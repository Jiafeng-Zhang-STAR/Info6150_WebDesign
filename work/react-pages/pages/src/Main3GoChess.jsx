import goChess1 from './images/8_goChess.jpg'; 
import goChess2 from './images/9_goChess.jpg'; 
import goChess3 from './images/10_goChess.jpg'; 
function Main3GoChess({changePageToMain3}){
    return (
        <div className="card__part">
            <div className="card card_1">
                <h2 className="card__title">GO Chess Rules</h2>
                <img src={goChess1} alt="This is the chess board of GO" className="card__picture"/>
                <div className="card__text">
                A game of Go starts with an empty board. Each player has an effectively unlimited supply of pieces (called stones), one taking the black stones, the other taking white. The main object of the game is to use your stones to form territories by surrounding vacant areas of the board.
                <p>You can click here to see
                    <a className="strongest-player__link" href={"/strongestchessplayer.html"} onClick={changePageToMain3}> {"World's strongest chess player"} </a>
                    , feel free to browse
                </p>
                </div>
            </div>

            <div className="card card_2">
                <h2 className="card__title">Scenes under GO chess</h2>
                <img src={goChess2} alt="This is the GO scene " className="card__picture"/>
                <div className="card__text">
                Play chess online for free on Chess.com with over 50 million members from around the world. Have fun playing with friends or challenging the computer!
                <p>You can click here to see
                    <button className="open2" type="button" id={"/strongestchessplayer.html"} onClick={changePageToMain3}>World's strongest chess player</button>
                    , feel free to browse
                </p>
                </div>
            </div>

            <div className="card card_3">
                <h2 className="card__title">GO chess popularity</h2>
                <img src={goChess3} alt="This is the chess board of GO" className="card__picture"/>
                <div className="card__text">
                Although still rather obscure in the West, go is wildly popular in Asia, especially in China, Japan and Korea, where there are more than 100 million active players.
                <p>You can click here to see
                    <button className="open2" type="button" href={"/strongestchessplayer.html"} onClick={changePageToMain3}>World's strongest chess player</button>
                    , feel free to browse
                </p>
                </div>
            </div>
        </div>
);
}

export default Main3GoChess;