import internationalChess1 from './images/Firework.png'; 
import Main2GalleryPictureGenerate from './Main2GalleryPictureGenerate'
import {useState} from 'react';



import './Main2Gallery.css';
function Main2Gallery(){
    const [switchLibraryFlag , setSwitchLibraryFlag] = useState(0);
    const [switchPictureCounterPrevious , setSwitchPictureCounterPrevious] = useState(0);
    const [switchPictureCounterNow , setSwitchPictureCounterNow] = useState(1);
    const [switchPictureCounterNext , setSwitchPictureCounterNext] = useState(2);
    
    function ForwardPicture(){
       if(switchLibraryFlag==0){
            if(switchPictureCounterNext==4){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(0);
            }else if(switchPictureCounterNext==0){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(0);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }else if(switchPictureCounterNext==1){
                setSwitchPictureCounterPrevious(0);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }
            else{
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }
       }else if(switchLibraryFlag==1){
            if(switchPictureCounterNext==11){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(0);
            }else if(switchPictureCounterNext==0){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(0);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }else if(switchPictureCounterNext==1){
                setSwitchPictureCounterPrevious(0);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }
            else{
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }
       }else{
            if(switchPictureCounterNext==24){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(0);
            }else if(switchPictureCounterNext==0){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(0);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }else if(switchPictureCounterNext==1){
                setSwitchPictureCounterPrevious(0);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }
            else{
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious+1);
                setSwitchPictureCounterNow(switchPictureCounterNow+1);
                setSwitchPictureCounterNext(switchPictureCounterNext+1);
            }
       };
    }

    function BackwardPicture(){
        if(switchLibraryFlag==0){
            if(switchPictureCounterNext==0){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(4);
            }else if(switchPictureCounterNext==1){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(4);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }else if(switchPictureCounterNext==2){
                setSwitchPictureCounterPrevious(4);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }
            else{
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }
       }else if(switchLibraryFlag==1){
            if(switchPictureCounterNext==0){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(11);
            }else if(switchPictureCounterNext==1){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(11);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }else if(switchPictureCounterNext==2){
                setSwitchPictureCounterPrevious(11);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }
            else{
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }
       }else{
            if(switchPictureCounterNext==0){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(24);
            }else if(switchPictureCounterNext==1){
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(24);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }else if(switchPictureCounterNext==2){
                setSwitchPictureCounterPrevious(24);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }
            else{
                setSwitchPictureCounterPrevious(switchPictureCounterPrevious-1);
                setSwitchPictureCounterNow(switchPictureCounterNow-1);
                setSwitchPictureCounterNext(switchPictureCounterNext-1);
            }
       };
    };
    
    function ChangeToProfile(){
        setSwitchLibraryFlag(0);
        setSwitchPictureCounterPrevious(0);
        setSwitchPictureCounterNow(1);
        setSwitchPictureCounterNext(2);
    };
    function ChangeToEquipment(){
        setSwitchLibraryFlag(1);
        setSwitchPictureCounterPrevious(0);
        setSwitchPictureCounterNow(1);
        setSwitchPictureCounterNext(2);
    };
    function ChanegToComponent(){ 
        setSwitchLibraryFlag(2);
        setSwitchPictureCounterPrevious(0);
        setSwitchPictureCounterNow(1);
        setSwitchPictureCounterNext(2);
    };
    
    
    
        
    return (
        <div className="gallery">
        <div className="gallery__index">
             <h1 className="gallery__title">Elemental People World Gallery</h1>
             <button className="profile__lib" onClick={() => {ChangeToProfile()}}>Profile lib</button>
             <button className="equipment__lib" onClick={() => {ChangeToEquipment()}}>Equipment lib</button>
             <button className="component__lib" onClick={() => {ChanegToComponent()}}>Component lib</button>
                <Main2GalleryPictureGenerate 
                    switchLibraryFlag={switchLibraryFlag} 
                    switchPictureCounterPrevious={switchPictureCounterPrevious} 
                    switchPictureCounterNow={switchPictureCounterNow}
                    switchPictureCounterNext={switchPictureCounterNext}
                    ForwardPicture={ForwardPicture}
                    BackwardPicture={BackwardPicture}
                />
            <button className="gallery__forward" onClick={() => {ForwardPicture()}}>Forward</button>
            <button className="gallery__backward" onClick={() => {BackwardPicture()}}>Backward</button>
            <h3 className="prompt__message--1">The gallery has three features:</h3>
            <p className="message__1">1.Click on the right image to move forward, the left image to move backward 
            <br/>2.Click the toggle button to switch 
            <br/>3.Click on the central image to zoom in and out</p>
            <h3 className="prompt__message--2">This gallery has switching library features:</h3>
            <p className="message__2">1.Please click the three buttons at the top to change picture library</p>
        </div>
        </div>    
    );
}

export default Main2Gallery;