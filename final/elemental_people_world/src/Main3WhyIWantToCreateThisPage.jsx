import card1 from './images/1_Head.png'; 
import card2 from './images/4_Head.png'; 
import card3 from './images/3_Head.png'; 
import card5 from './images/3_Body.png'; 
import card4 from './images/0_logo.png'; 

import './Main3WhyIWantToCreateThisPage.css';

function Main3WhyIWantToCreateThisPage({changePageToMain3}){
    return (
        <div className="card__part">
            
        <div className="card card_4">
            <h2 className="card__title--other card__title1">Why do I want to create this page? </h2>
            <img src={card4} alt="This is a cat owned by the top Internet gods" className="card__picture card__picture1"/>
            <div className="card__text--other card__text1">
                The world is elemental composition, physical changes, chemical changes, molecules, atoms. Showing a huge idea is my original point
                <br/><br/>The five elements, which have different presentations in different parts of the world. Although we now know that there are too many elements in the world, so I am not sure about "gold 金 ", "wood 木", "water 水", "fire 火", "earth 土" have made their own modifications. I modified them into physical changes as well as molecules.
                <br/><br/>*I was going to make a character that could interact through different Modal Forms and then generate characters made up of different elements, and then those characters would have different attributes. Attack power, movement speed, etc. But in the process of drawing pictures and so on, I found that it took too long, so I had to generate characters interactively instead.
                <br/><br/>I think the final project has to do a very special content, although it did not achieve the ultimate goal, but perhaps not lose a good idea.
             </div>
      </div>

      

            <div className="card card_1">
                <h2 className="card__title">Five Elements of Gold</h2>
                <img src={card1} alt="This is a gold element picture" className="card__picture"/>
                <div className="card__text">
                Gold "金", a precious metal that has defined consumption in basically every historical era. Why gold became the representative of money throughout history. Will human society be like a game that actually presents itself differently under the coincidence of history.
                <p>You can click here to see
                    <a className="elementalPeopleImage__link" href={"/Main1ElementalPeopleImage.html"} onClick={changePageToMain3}> {"Elemental Image Create Game"} </a>
                    to feel the fun things
                </p>
                </div>
            </div>

            <div className="card card_2">
                <h2 className="card__title">Five Elements of Flame Change</h2>
                <img src={card2} alt="This is a picture of the flame Change element" className="card__picture"/>
                <div className="card__text">
                Fire "火", not an element, is just a chemical change, why most of history people consider it to be one of the basic components. Because the source of life removes water, and temperature. The human body has a basic temperature. Fire provides the heat to be able to cook food. The miracle of life comes from water and the various elements, and the development of life comes from fire.
                <p>You can click here to see
                    <a className="elementalPeopleImage__link" href={"/Main1ElementalPeopleImage.html"} onClick={changePageToMain3}> {"Elemental Image Create Game"} </a>
                    to feel the fun things
                </p>
                </div>
            </div>

            <div className="card card_3">
                <h2 className="card__title">Five Elements of Water Molecule</h2>
                <img src={card3} alt="This is a picture of water molecules" className="card__picture"/>
                <div className="card__text">
                Water "水", not as an element, but as a molecule, is why most of history people consider it to be one of the basic components. Because water is one of the constituents of the human body. The rain in the sky is my favorite beauty. The most beautiful is not the rainy day, I think the collision of various elements is the beautiful poetry of life.
                <p>You can click here to see
                    <a className="elementalPeopleImage__link" href={"/Main1ElementalPeopleImage.html"} onClick={changePageToMain3}> {"Elemental Image Create Game"} </a>
                    to feel the fun things
                </p>
                </div>
            </div>

    <div className="card card_5">
        <h2 className="card__title--other card__title2">The Circular Way "循环之道"</h2>
        <img src={card5} alt="This is a cat from the CEO of Cat Cool Platform" className="card__picture card__picture2"/>
        <div className="card__text--other card__text2">
            Gold "金", wood "木", water "水", fire "火" and earth "土" represent the truth that all things are mutually exclusive. In fact, it is really amazing, because it is not the elements restrain the elements, water and fire are not elements, and even earth is a mixture. But we are able to subdue each other. The element gold can probably diffuse atoms in the earth.
            <br/><br/>In the non-stop molecular movement you and I will be constantly circulating with the outside world. I remember a comic that said that people and the world universe are actually connected. Because you are interacting with it all the time. 
            <br/><br/>All the people who have lived are wonderful and incomparable life, in the long history, are the great miracle of the world, there is no high or low, may you always be happy and follow the original heart.
            <br/><br/>“所有活过的人都是精彩无比的一生，在历史的长河中，都是世界的伟大奇迹，没有高低贵贱，愿你永远开心，遵循本心”.
        </div>
    </div>

        </div>

        
);
}

export default Main3WhyIWantToCreateThisPage;