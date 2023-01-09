import rightHandPicture1 from './images/1_RightHand.png'; 
import rightHandPicture2 from './images/2_RightHand.png'; 
import rightHandPicture3 from './images/3_RightHand.png'; 
import rightHandPicture4 from './images/4_RightHand.png'; 
import rightHandPicture5 from './images/5_RightHand.png'; 

function Main1GenerateRightHand({rightHandTemp}){
    switch(rightHandTemp/1){
        case 1:
            return(
                <img src={rightHandPicture1} alt="This is a Elemental People Picture RightHand" className="rightHand_picture"/>
            );
            break;
        case 2:
            return(
                <img src={rightHandPicture2} alt="This is a Elemental People Picture RightHand" className="rightHand_picture"/>
              );
             break;
        case 3:
            return(
                <img src={rightHandPicture3} alt="This is a Elemental People Picture RightHand" className="rightHand_picture"/>
              );
            break;
        case 4:
            return(
                <img src={rightHandPicture4} alt="This is a Elemental People Picture RightHand" className="rightHand_picture"/>
              );
             break;
        case 5:
            return(
                <img src={rightHandPicture5} alt="This is a Elemental People Picture RightHand" className="rightHand_picture"/>
              );
            break
        default:
            return(
                <img src={rightHandPicture5} alt="This is a Elemental People Picture RightHand" className="rightHand_picture"/>
              );
      }  
}

export default Main1GenerateRightHand;