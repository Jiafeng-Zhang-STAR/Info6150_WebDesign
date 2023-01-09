import headPicture1 from './images/1_Head.png'; 
import headPicture2 from './images/2_Head.png'; 
import headPicture3 from './images/3_Head.png'; 
import headPicture4 from './images/4_Head.png'; 
import headPicture5 from './images/5_Head.png';

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
 

import bodyPicture1 from './images/1_Body.png'; 
import bodyPicture2 from './images/2_Body.png'; 
import bodyPicture3 from './images/3_Body.png'; 
import bodyPicture4 from './images/4_Body.png'; 
import bodyPicture5 from './images/5_Body.png'; 

import leftHandPicture1 from './images/1_LeftHand.png'; 
import leftHandPicture2 from './images/2_LeftHand.png'; 
import leftHandPicture3 from './images/3_LeftHand.png'; 
import leftHandPicture4 from './images/4_LeftHand.png'; 
import leftHandPicture5 from './images/5_LeftHand.png'; 

import leftLegPicture1 from './images/1_LeftLeg.png'; 
import leftLegPicture2 from './images/2_LeftLeg.png'; 
import leftLegPicture3 from './images/3_LeftLeg.png'; 
import leftLegPicture4 from './images/4_LeftLeg.png'; 
import leftLegPicture5 from './images/5_LeftLeg.png'; 

import rightHandPicture1 from './images/1_RightHand.png'; 
import rightHandPicture2 from './images/2_RightHand.png'; 
import rightHandPicture3 from './images/3_RightHand.png'; 
import rightHandPicture4 from './images/4_RightHand.png'; 
import rightHandPicture5 from './images/5_RightHand.png'; 

import rightLegPicture1 from './images/1_RightLeg.png'; 
import rightLegPicture2 from './images/2_RightLeg.png'; 
import rightLegPicture3 from './images/3_RightLeg.png'; 
import rightLegPicture4 from './images/4_RightLeg.png'; 
import rightLegPicture5 from './images/5_RightLeg.png'; 

import {useState} from 'react';



var ProfileLib = new Array();
ProfileLib[0] = headPicture1;
ProfileLib[1] = headPicture2;
ProfileLib[2] = headPicture3;
ProfileLib[3] = headPicture4;
ProfileLib[4] = headPicture5;

var EquipmentLib = new Array();
EquipmentLib[0] = equipmentpicture1;
EquipmentLib[1] = equipmentpicture2;
EquipmentLib[2] = equipmentpicture3;
EquipmentLib[3] = equipmentpicture4;
EquipmentLib[4] = equipmentpicture5;
EquipmentLib[5] = equipmentpicture6;
EquipmentLib[6] = equipmentpicture7;
EquipmentLib[7] = equipmentpicture8;
EquipmentLib[8] = equipmentpicture9;
EquipmentLib[9] = equipmentpicture10;
EquipmentLib[10] = equipmentpicture11;
EquipmentLib[11] = equipmentpicture12;

var ComponentLib = new Array();
ComponentLib[0] = bodyPicture1;
ComponentLib[1] = bodyPicture2;
ComponentLib[2] = bodyPicture3;
ComponentLib[3] = bodyPicture4;
ComponentLib[4] = bodyPicture5;

ComponentLib[5] = leftHandPicture1;
ComponentLib[6] = leftHandPicture2;
ComponentLib[7] = leftHandPicture3;
ComponentLib[8] = leftHandPicture4;
ComponentLib[9] = leftHandPicture5;

ComponentLib[10] = leftLegPicture1;
ComponentLib[11] = leftLegPicture2;
ComponentLib[12] = leftLegPicture3;
ComponentLib[13] = leftLegPicture4;
ComponentLib[14] = leftLegPicture5;

ComponentLib[15] = rightHandPicture1;
ComponentLib[16] = rightHandPicture2;
ComponentLib[17] = rightHandPicture3;
ComponentLib[18] = rightHandPicture4;
ComponentLib[19] = rightHandPicture5;

ComponentLib[20] = rightLegPicture1;
ComponentLib[21] = rightLegPicture2;
ComponentLib[22] = rightLegPicture3;
ComponentLib[23] = rightLegPicture4;
ComponentLib[24] = rightLegPicture5;






function Main2GalleryPictureGenerate({switchLibraryFlag
                                    ,switchPictureCounterPrevious
                                    ,switchPictureCounterNow
                                    ,switchPictureCounterNext
                                    ,ForwardPicture
                                    ,BackwardPicture}
                                    ){
    
const [showZoomInClassName , setShowZoomInClassName] = useState(0);

const zoomInClassName  = showZoomInClassName ? 'center__picture--zoom':'';
     {switch(switchLibraryFlag){
        case 0:
            return(
                <div className='gallerybox'>
                    <div className='previous__picture--box'>
                        <img src={ProfileLib[switchPictureCounterPrevious]} 
                        alt="This is a Elemental People Picture of Profile" 
                        className="previous__picture"  onClick={() => {ForwardPicture();}}/>
                    </div>

                    <div className='center__picture--box'>
                        <img src={ProfileLib[switchPictureCounterNow]} 
                        alt="This is a Elemental People Picture of Profile" 
                        className={`center__picture ${zoomInClassName}`}  onClick={() => {setShowZoomInClassName(!showZoomInClassName)}}/>
                    </div>

                    <div className='next__picture--box'>
                        <img src={ProfileLib[switchPictureCounterNext]} 
                        alt="This is a Elemental People Picture of Profile" 
                        className="next__picture"  onClick={() => {BackwardPicture();}}/>
                    </div>
                </div>
            );
            break;
        case 1:
            return(
                <div className='gallerybox'>
                    <div className='previous__picture--box'>
                        <img src={EquipmentLib[switchPictureCounterPrevious]} 
                        alt="This is a Elemental People Picture of Equipment" 
                        className="previous__picture"  onClick={() => {ForwardPicture();}}/>
                    </div>

                    <div className='center__picture--box'>
                        <img src={EquipmentLib[switchPictureCounterNow]} 
                        alt="This is a Elemental People Picture of Equipment" 
                        className={`center__picture ${zoomInClassName}`} onClick={() => {setShowZoomInClassName(!showZoomInClassName)}}/>
                    </div>

                    <div className='next__picture--box'>
                        <img src={EquipmentLib[switchPictureCounterNext]} 
                        alt="This is a Elemental People Picture of Equipment" 
                        className="next__picture" onClick={() => {BackwardPicture();}}/>
                    </div>
                </div>
            );
        case 2:
            return(
                <div className='gallerybox'>
                    <div className='previous__picture--box'>
                        <img src={ComponentLib[switchPictureCounterPrevious]} 
                        alt="This is a Elemental People Picture of Component" 
                        className="previous__picture"  onClick={() => {ForwardPicture();}}/>
                    </div>

                    <div className='center__picture--box'>
                        <img src={ComponentLib[switchPictureCounterNow]} 
                        alt="This is a Elemental People Picture of Component" 
                        className={`center__picture ${zoomInClassName}`}  onClick={() => {setShowZoomInClassName(!showZoomInClassName)}}/>
                    </div>

                    <div className='next__picture--box'>
                        <img src={ComponentLib[switchPictureCounterNext]} 
                        alt="This is a Elemental People Picture of Component" 
                        className="next__picture"  onClick={() => {BackwardPicture();}}/>
                    </div>
                </div>
            );
        default:
    }}
}

export default Main2GalleryPictureGenerate;