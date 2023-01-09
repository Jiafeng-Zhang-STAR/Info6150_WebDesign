import player from './images/11_Guli.jpg'; 

function Main4StrongestChessPlayer(){
    return (
            <div>
                <div className="card card_1">
                    <h2 className="card__title">Gu li</h2>
                    <img src={player} alt="This is GuLi participating in the competition" className="card__picture"/>
                    <div className="card__text">
                      Lee is the defending champion, and qualified for the finals by beating up-and-coming countryman Park Junghwan 9P. Meanwhile, Gu defeated Heo Yeongho 8P to challenge Lee in the final. The first two matches were played on April 23-24 and the score is currently tied at one game apiece, with Lee evening the score in the second game.
                    </div>
                </div>
            </div>
    );
}

export default Main4StrongestChessPlayer;