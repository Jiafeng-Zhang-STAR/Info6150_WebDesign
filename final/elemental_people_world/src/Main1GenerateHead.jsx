import headPicture1 from './images/1_Head.png'; 
import headPicture2 from './images/2_Head.png'; 
import headPicture3 from './images/3_Head.png'; 
import headPicture4 from './images/4_Head.png'; 
import headPicture5 from './images/5_Head.png'; 

function Main1GenerateHead({headTemp}){
    switch(headTemp/1){
        case 1:
            return(
                <img src={headPicture1} alt="This is a Elemental People Picture Head" className="head_picture"/>
            );
            break;
        case 2:
            return(
                <img src={headPicture2} alt="This is a Elemental People Picture Head" className="head_picture"/>
              );
             break;
        case 3:
            return(
                <img src={headPicture3} alt="This is a Elemental People Picture Head" className="head_picture"/>
              );
            break;
        case 4:
            return(
                <img src={headPicture4} alt="This is a Elemental People Picture Head" className="head_picture"/>
              );
             break;
        case 5:
            return(
                <img src={headPicture5} alt="This is a Elemental People Picture Head" className="head_picture"/>
              );
            break
        default:
            return(
                <img src={headPicture5} alt="This is a Elemental People Picture Head" className="head_picture"/>
              );
      }  
}

export default Main1GenerateHead;