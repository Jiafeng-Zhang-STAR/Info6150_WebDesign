import leftHandPicture1 from './images/1_LeftHand.png'; 
import leftHandPicture2 from './images/2_LeftHand.png'; 
import leftHandPicture3 from './images/3_LeftHand.png'; 
import leftHandPicture4 from './images/4_LeftHand.png'; 
import leftHandPicture5 from './images/5_LeftHand.png'; 

function Main1GenerateLeftHand({leftHandTemp}){
    switch(leftHandTemp/1){
        case 1:
            return(
                <img src={leftHandPicture1} alt="This is a Elemental People Picture LeftHand" className="leftHand_picture"/>
            );
            break;
        case 2:
            return(
                <img src={leftHandPicture2} alt="This is a Elemental People Picture LeftHand" className="leftHand_picture"/>
              );
             break;
        case 3:
            return(
                <img src={leftHandPicture3} alt="This is a Elemental People Picture LeftHand" className="leftHand_picture"/>
              );
            break;
        case 4:
            return(
                <img src={leftHandPicture4} alt="This is a Elemental People Picture LeftHand" className="leftHand_picture"/>
              );
             break;
        case 5:
            return(
                <img src={leftHandPicture5} alt="This is a Elemental People Picture LeftHand" className="leftHand_picture"/>
              );
            break
        default:
            return(
                <img src={leftHandPicture5} alt="This is a Elemental People Picture LeftHand" className="leftHand_picture"/>
              );
      }  
}

export default Main1GenerateLeftHand;