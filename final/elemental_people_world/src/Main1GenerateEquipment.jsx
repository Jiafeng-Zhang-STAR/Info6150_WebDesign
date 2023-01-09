import equipmentpicture1 from './images/Knife.png'; 
import equipmentpicture2 from './images/Stick.png'; 
import equipmentpicture3 from './images/Scissor.png'; 
import equipmentpicture4 from './images/Laser Sword.png'; 
import equipmentpicture5 from './images/Spear.png'; 
import equipmentpicture6 from './images/Police Baton.png'; 
import equipmentpicture7 from './images/Firework.png'; 
import equipmentpicture8 from './images/Lightning Generator.png'; 
import equipmentpicture9 from './images/Big Knife.png'; 
import equipmentpicture10 from './images/Poke Ball.png'; 
import equipmentpicture11 from './images/Laser Stick.png'; 
import equipmentpicture12 from './images/High Power Knife.png'; 

function Main1GenerateEquipment({equipmentTemp}){
    switch(equipmentTemp){
        case "Knife":
            return(
                <img src={equipmentpicture1} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
            );
            break;
        case "Stick":
            return(
                <img src={equipmentpicture2} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
              );
             break;
        case "Scissor":
            return(
                <img src={equipmentpicture3} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
              );
            break;
        case "Laser Sword":
            return(
                <img src={equipmentpicture4} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
              );
             break;
        case "Spear":
            return(
                <img src={equipmentpicture5} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
              );
            break
        case "Police Baton":
            return(
                <img src={equipmentpicture6} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
            );
            break;
        case "Firework":
            return(
                <img src={equipmentpicture7} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
                );
                break;
        case "Lightning Generator":
            return(
                <img src={equipmentpicture8} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
                );
            break;
        case "Big Knife":
            return(
                <img src={equipmentpicture9} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
                );
                break;
        case "Poke Ball":
            return(
                <img src={equipmentpicture10} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
                );
            break
        case "Laser Stick":
            return(
                <img src={equipmentpicture11} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
                );
                break;
        case "High Power Knife":
            return(
                <img src={equipmentpicture12} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
                );
            break
        default:
            return(
                <img src={equipmentpicture11} alt="This is a Elemental People Picture Equipment" className="equipment_picture"/>
              );
      }  
}

export default Main1GenerateEquipment;