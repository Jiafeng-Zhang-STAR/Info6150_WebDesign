import bodyPicture1 from './images/1_Body.png'; 
import bodyPicture2 from './images/2_Body.png'; 
import bodyPicture3 from './images/3_Body.png'; 
import bodyPicture4 from './images/4_Body.png'; 
import bodyPicture5 from './images/5_Body.png'; 

function Main1GenerateBody({bodyTemp}){
    switch(bodyTemp/1){
        case 1:
            return(
                <img src={bodyPicture1} alt="This is a Elemental People Picture Body" className="body_picture"/>
            );
            break;
        case 2:
            return(
                <img src={bodyPicture2} alt="This is a Elemental People Picture Body" className="body_picture"/>
              );
             break;
        case 3:
            return(
                <img src={bodyPicture3} alt="This is a Elemental People Picture Body" className="body_picture"/>
              );
            break;
        case 4:
            return(
                <img src={bodyPicture4} alt="This is a Elemental People Picture Body" className="body_picture"/>
              );
             break;
        case 5:
            return(
                <img src={bodyPicture5} alt="This is a Elemental People Picture Body" className="body_picture"/>
              );
            break
        default:
            return(
                <img src={bodyPicture5} alt="This is a Elemental People Picture Body" className="body_picture"/>
              );
      }  
}

export default Main1GenerateBody;