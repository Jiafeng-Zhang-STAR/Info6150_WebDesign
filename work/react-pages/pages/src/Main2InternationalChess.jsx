import internationalChess1 from './images/5_internationalChess.jpg'; 
import internationalChess2 from './images/6_internationalChess.jpg'; 
import internationalChess3 from './images/7_internationalChess.jpg'; 

function Main2InternationalChess({changePageToMain2}){
    return (
        <div className="card__part">
            <div className="card card_1">
                <h2 className="card__title">How to play International Chess alone</h2>
                <img src={internationalChess1} alt="A man playing alone" className="card__picture"/>
                <div className="card__text">
                In Solo Chess, all the pieces are the same color, and any piece can capture the other. The object of Solo Chess is to move the pieces so that they all capture each other until only one piece remains. These are the rules of Solo Chess: Every move must capture a piece.
                <p>You can click here to see
                    <a className="strongest-player__link" href={"/strongestchessplayer.html"} onClick={changePageToMain2}> {"World's strongest chess player"} </a>
                    , feel free to browse
                </p>
                </div>
            </div>

            <div className="card card_2">
                <h2 className="card__title">International Chess Rules</h2>
                <img src={internationalChess2} alt="This is a International chess board diagram" className="card__picture"/>
                <div className="card__text">
                During the game each player, having made his move on the chessboard, shall stop his own clock and start his opponent's clock. A player must always be allowed to stop his clock. His move is not considered to have been completed until he has done so, unless the move that was made ends the game.
                <p>You can click here to see
                    <button className="open2" type="button" id={"/strongestchessplayer.html"} onClick={changePageToMain2}>World's strongest chess player</button>
                    , feel free to browse
                </p>
                </div>
            </div>

            <div className="card card_3">
                <h2 className="card__title">International chess popularity</h2>
                <img src={internationalChess3} alt="This is a International chess board" className="card__picture"/>
                <div className="card__text">
                About 70% of the adult population (US, UK, Germany, Russia, India) has played chess at some point in their lives, 605 million adults play chess regularly. Mathematically there are more possible games of chess than there are atoms in the Observable Universe. It is possible to checkmate an opponent in chess in two moves
                <p>You can click here to see
                    <button className="open2" type="button" href={"/strongestchessplayer.html"} onClick={changePageToMain2}>World's strongest chess player</button>
                    , feel free to browse
                </p>
                </div>
            </div>
        </div>
);
}

export default Main2InternationalChess;