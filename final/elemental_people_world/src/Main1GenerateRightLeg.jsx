import rightLegPicture1 from './images/1_RightLeg.png'; 
import rightLegPicture2 from './images/2_RightLeg.png'; 
import rightLegPicture3 from './images/3_RightLeg.png'; 
import rightLegPicture4 from './images/4_RightLeg.png'; 
import rightLegPicture5 from './images/5_RightLeg.png'; 

function Main1GenerateRightLeg({rightLegTemp}){
    switch(rightLegTemp/1){
        case 1:
            return(
                <img src={rightLegPicture1} alt="This is a Elemental People Picture RightLeg" className="rightLeg_picture"/>
            );
            break;
        case 2:
            return(
                <img src={rightLegPicture2} alt="This is a Elemental People Picture RightLeg" className="rightLeg_picture"/>
              );
             break;
        case 3:
            return(
                <img src={rightLegPicture3} alt="This is a Elemental People Picture RightLeg" className="rightLeg_picture"/>
              );
            break;
        case 4:
            return(
                <img src={rightLegPicture4} alt="This is a Elemental People Picture RightLeg" className="rightLeg_picture"/>
              );
             break;
        case 5:
            return(
                <img src={rightLegPicture5} alt="This is a Elemental People Picture RightLeg" className="rightLeg_picture"/>
              );
            break
        default:
            return(
                <img src={rightLegPicture5} alt="This is a Elemental People Picture RightLeg" className="rightLeg_picture"/>
              );
      }  
}

export default Main1GenerateRightLeg;