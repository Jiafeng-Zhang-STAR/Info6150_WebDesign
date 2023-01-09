import leftLegPicture1 from './images/1_LeftLeg.png'; 
import leftLegPicture2 from './images/2_LeftLeg.png'; 
import leftLegPicture3 from './images/3_LeftLeg.png'; 
import leftLegPicture4 from './images/4_LeftLeg.png'; 
import leftLegPicture5 from './images/5_LeftLeg.png'; 

function Main1GenerateLeftLeg({leftLegTemp}){
    switch(leftLegTemp/1){
        case 1:
            return(
                <img src={leftLegPicture1} alt="This is a Elemental People Picture LeftLeg" className="leftLeg_picture"/>
            );
            break;
        case 2:
            return(
                <img src={leftLegPicture2} alt="This is a Elemental People Picture LeftLeg" className="leftLeg_picture"/>
              );
             break;
        case 3:
            return(
                <img src={leftLegPicture3} alt="This is a Elemental People Picture LeftLeg" className="leftLeg_picture"/>
              );
            break;
        case 4:
            return(
                <img src={leftLegPicture4} alt="This is a Elemental People Picture LeftLeg" className="leftLeg_picture"/>
              );
             break;
        case 5:
            return(
                <img src={leftLegPicture5} alt="This is a Elemental People Picture LeftLeg" className="leftLeg_picture"/>
              );
            break
        default:
            return(
                <img src={leftLegPicture5} alt="This is a Elemental People Picture LeftLeg" className="leftLeg_picture"/>
              );
      }  
}

export default Main1GenerateLeftLeg;