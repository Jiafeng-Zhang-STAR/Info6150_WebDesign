import './Main1ElementalPeopleImage.css';
import './Main1GeneratePicture.css';
import Main1HeadGenerate from './Main1GenerateHead';
// import ViewRoleInformation from './ViewRoleInformation';
import {useState} from 'react';
import { useRef } from 'react';

import Main1GenerateBody from './Main1GenerateBody';
import Main1GenerateHead from './Main1GenerateHead';
import Main1GenerateLeftHand from './Main1GenerateLeftHand';
import Main1GenerateRightHand from './Main1GenerateRightHand';
import Main1GenerateLeftLeg from './Main1GenerateLeftLeg';
import Main1GenerateRightLeg from './Main1GenerateRightLeg';
import Main1GenerateEquipment from './Main1GenerateEquipment';

function Main1ElementalPeopleImage({changePageToMain1}){

  const [roleName , setRoleName] = useState("");
  const [roleNameConfirm , setRoleNameConfirm] = useState("");
  const [headTemp , setHeadTemp] = useState(1);
  const [bodyTemp , setBodyTemp] = useState(1);
  const [leftHandTemp , setLeftHandTemp] = useState(1);
  const [rightHandTemp , setRightHandTemp] = useState(1);
  const [rightLegTemp , setRightLegTemp] = useState(1);
  const [leftLegTemp , setLeftLegTemp] = useState(1);
  const [equipmentTemp , setEquipmentTemp] = useState("Laser Stick");

  const [headTempLetter , setHeadTempLetter] = useState("");
  const [bodyTempLetter , setBodyTempLetter] = useState("");
  const [leftHandTempLetter , setLeftHandTempLetter] = useState("");
  const [rightHandTempLetter , setRightHandTempLetter] = useState("");
  const [rightLegTempLetter , setRightLegTempLetter] = useState("");
  const [leftLegTempLetter , setLeftLegTempLetter] = useState("");

  const [viewRole , setViewRole] = useState(0);

  const [viewRolePicture , setViewRolePicture] = useState(0);


  var [summaryPoint , setSummaryPoint] = useState(6);

  const handleRoleNameChange = evt =>{
    setRoleName(evt.target.value);
  }
  const handleRoleNameConfirmChange = evt =>{
    setRoleNameConfirm(evt.target.value);
  }
  const isValid = Boolean( ((roleName !=="")&&(roleNameConfirm !=="")&&(roleNameConfirm===roleName)));


  const modalRef = useRef(null);
  
  function WhenModalSubmitToDo(event){
    setViewRole(1);
    setViewRolePicture(1);
    setEquipmentTemp(document.getElementById("equipmentChooser").value)
    event.preventDefault();
  }
  
  function handleRoleAttrChangeHead () {
    setHeadTemp(document.getElementById("headTemp").value);
    GetSummaryElementChooseOne();
  }

  function handleRoleAttrChangeBody () {
    setBodyTemp(document.getElementById("bodyTemp").value);
    GetSummaryElementChooseOne();
  }

  function handleRoleAttrChangeLeftHand() {
    setLeftHandTemp(document.getElementById("leftHandTemp").value);
    GetSummaryElementChooseOne();
  }

  function handleRoleAttrChangeRightHand () {
    setRightHandTemp(document.getElementById("rightHandTemp").value);
    GetSummaryElementChooseOne();
  }
  function handleRoleAttrChangeLeftLeg () {
    setLeftLegTemp(document.getElementById("leftLegTemp").value);
    GetSummaryElementChooseOne();
  }
  function handleRoleAttrChangeRightLeg () {
    setRightLegTemp(document.getElementById("rightLegTemp").value);
    GetSummaryElementChooseOne();
  }

  function GetSummaryElementChooseOne(){
    var elementSummary=headTemp/1+bodyTemp/1+leftHandTemp/1+rightHandTemp/1+rightLegTemp/1+leftLegTemp/1;
    setSummaryPoint(elementSummary);
  }

  function EquipmentSelect(){
      var selectTemp1 = "";
      var selectTemp2 = "";
    if(summaryPoint>23){
      selectTemp1 = "Knife";
      selectTemp2 = "Stick";
    }else if(summaryPoint>20){
      selectTemp1 = "Scissor";
      selectTemp2 = "Laser Sword";
    }else if(summaryPoint>18){
      selectTemp1 = "Spear";
      selectTemp2 = "Police Baton";
    }else if(summaryPoint>15){
      selectTemp1 = "Firework";
      selectTemp2 = "Lightning Generator";
    }else if(summaryPoint>8){
      selectTemp1 = "Big Knife";
      selectTemp2 = "Poke Ball";
    }else {
      selectTemp1 = "Laser Stick";
      selectTemp2 = "High Power Knife";
    }
    return(
      <>
        <label htmlFor="equipmentChooser" className="role__parameter8--label">Two optional equipment options auto generate: </label>
        <select id="equipmentChooser" className="equipmentChooser">
          <option value={selectTemp1}>{selectTemp1}</option>
          <option value={selectTemp2}>{selectTemp2}</option>
        </select>
      </>
    );
  }

  function ChangeNumberToLetter(){
    switch(headTemp/1){
      case 1:
        setHeadTempLetter("Gold");
        break;
      case 2:
        setHeadTempLetter("Carbon");
        break;
      case 3:
        setHeadTempLetter("Water");
        break;
      case 4:
        setHeadTempLetter("Flame");
        break;
      case 5:
        setHeadTempLetter("Silicon");
        break
      default:
    }

    switch(bodyTemp/1){
      case 1:
        setBodyTempLetter("Gold");
        break;
      case 2:
        setBodyTempLetter("Carbon");
        break;
      case 3:
        setBodyTempLetter("Water");
        break;
      case 4:
        setBodyTempLetter("Flame");
        break;
      case 5:
        setBodyTempLetter("Silicon");
        break
      default:
    }

    switch(leftHandTemp/1){
      case 1:
        setLeftHandTempLetter("Gold");
        break;
      case 2:
        setLeftHandTempLetter("Carbon");
        break;
      case 3:
        setLeftHandTempLetter("Water");
        break;
      case 4:
        setLeftHandTempLetter("Flame");
        break;
      case 5:
        setLeftHandTempLetter("Silicon");
        break
      default:
    }

    switch(rightHandTemp/1){
      case 1:
        setRightHandTempLetter("Gold");
        break;
      case 2:
        setRightHandTempLetter("Carbon");
        break;
      case 3:
        setRightHandTempLetter("Water");
        break;
      case 4:
        setRightHandTempLetter("Flame");
        break;
      case 5:
        setRightHandTempLetter("Silicon");
        break
      default:
    }

    switch(rightLegTemp/1){
      case 1:
        setRightLegTempLetter("Gold");
        break;
      case 2:
        setRightLegTempLetter("Carbon");
        break;
      case 3:
        setRightLegTempLetter("Water");
        break;
      case 4:
        setRightLegTempLetter("Flame");
        break;
      case 5:
        setRightLegTempLetter("Silicon");
        break
      default:
    }

    switch(leftLegTemp/1){
      case 1:
        setLeftLegTempLetter("Gold");
        break;
      case 2:
        setLeftLegTempLetter("Carbon");
        break;
      case 3:
        setLeftLegTempLetter("Water");
        break;
      case 4:
        setLeftLegTempLetter("Flame");
        break;
      case 5:
        setLeftLegTempLetter("Silicon");
        break
      default:
    }
   
  }
  function ViewRoleInformation(){
    return(

    
      // <numberToElement />
      <section className='roleInformation'>
        <label htmlFor="roleView1">Role Name: </label>
        <h3 className='roleView1'>{roleName}</h3>

        <label htmlFor="roleView2">Head Type: </label>
        <h3 className='roleView2'>{headTempLetter}</h3>

        <label htmlFor="roleView3">Body Type: </label>
        <h3 className='roleView3'>{bodyTempLetter}</h3>

        <label htmlFor="roleView4">LeftHand Type: </label>
        <h3 className='roleView4'>{leftHandTempLetter}</h3>

        <label htmlFor="roleView5">RightHand Type: </label>
        <h3 className='roleView5'>{rightHandTempLetter}</h3>

        <label htmlFor="roleView6">LeftLeg Type: </label>
        <h3 className='roleView6'>{leftLegTempLetter}</h3>

        <label htmlFor="roleView6">RightLeg Type: </label>
        <h3 className='roleView6'>{rightLegTempLetter}</h3>

        <label htmlFor="roleView8">Equipment: </label>
        <h3 className='roleView18'>{equipmentTemp}</h3>
      </section>
    );
  }

function ViewModelButtonClick(){
  modalRef.current.showModal(); 
  setViewRole(0);
  setViewRolePicture(0);
}


  

  return (
    <div className="Main">
      <div className="rolePicutre">
        <div className="headOut">{viewRolePicture ?<Main1GenerateHead headTemp={headTemp}/> : <></>}</div>
        <div className="bodyOut">{viewRolePicture ?<Main1GenerateBody bodyTemp={bodyTemp}/> : <></>}</div>
        <div className="leftHandOut">{viewRolePicture ?<Main1GenerateLeftHand leftHandTemp={leftHandTemp}/> : <></>}</div>
        <div className="rightHandOut">{viewRolePicture ?<Main1GenerateRightHand rightHandTemp={rightHandTemp}/> : <></>}</div>
        <div className="leftLegOut">{viewRolePicture ?<Main1GenerateLeftLeg leftLegTemp={leftLegTemp}/> : <></>}</div>
        <div className="rightLegOut">{viewRolePicture ?<Main1GenerateRightLeg rightLegTemp={rightLegTemp}/> : <></>}</div>
        <div className="equipmentOut">{viewRolePicture ?<Main1GenerateEquipment equipmentTemp={equipmentTemp}/> : <></>}</div>
      </div>
      
      {viewRole ? <ViewRoleInformation /> : <></>}
      <button className="modal__open"onClick={ () => {ViewModelButtonClick(); }}>Choose Your Role to get Picture</button>
      
      <dialog className="modal" ref={modalRef}>
        <form className="subscribe" onSubmit={WhenModalSubmitToDo}>

          <h2 className="form__title">Subscribe to initial you role</h2>
            
            <label htmlFor="roleName" className="role__parameter11--label">Role Name: *required</label>
            <input type="text" id="roleName" className="roleName" onChange={handleRoleNameChange}/>

            <label className="role__parameter11--error">{isValid ? "" : "Role Name Should Same and not Null"}</label>
           
            <label htmlFor="roleNameConfrim" className="role__parameter12--label">Confirm Role Name: *required</label>
            <input type="text" id="roleNameConfrim" className="roleNameConfrim" onChange={handleRoleNameConfirmChange}/>
            
            <label className="role__parameter12--error">{isValid ? "" : "Role Name Should Same and not Null"}</label>

            <label htmlFor="headTemp" className="role__parameter2--label">Role Head Substance: *required</label>
            <select id="headTemp" className="roleHead" onChange={handleRoleAttrChangeHead}>
              <option value="1">Gold Element</option>
              <option value="2">Carbon Element</option>
              <option value="3">Water Molecule</option>
              <option value="4">Flame Change</option>
              <option value="5">Silicon Element</option>
            </select>

            <label htmlFor="bodyTemp" className="role__parameter3--label">Role Body Substance: *required</label>
            <select id="bodyTemp" className="roleBody" onChange={handleRoleAttrChangeBody}>
                <option value="1">Gold Element</option>
                <option value="2">Carbon Element</option>
              <option value="3">Water Molecule</option>
              <option value="4">Flame Change</option>
              <option value="5">Silicon Element</option>
            </select>

            <label htmlFor="leftHandTemp" className="role__parameter4--label">Role LeftHand Substance:*required</label>
            <select id="leftHandTemp" className="roleLeftHand" onChange={handleRoleAttrChangeLeftHand}>
              <option value="1">Gold Element</option>
              <option value="2">Carbon Element</option>
              <option value="3">Water Molecule</option>
              <option value="4">Flame Change</option>
              <option value="5">Silicon Element</option>
            </select>

            <label htmlFor="rightHandTemp" className="role__parameter5--label">Role RightHand Substance: *required</label>
            <select id="rightHandTemp" className="roleRightHand" onChange={handleRoleAttrChangeRightHand}>
              <option value="1">Gold Element</option>
              <option value="2">Carbon Element</option>
              <option value="3">Water Molecule</option>
              <option value="4">Flame Change</option>
              <option value="5">Silicon Element</option>
            </select>

            <label htmlFor="leftLegTemp" className="role__parameter6--label">Role LeftLeg Substance: *required</label>
            <select id="leftLegTemp" className="roleLeftLeg" onChange={handleRoleAttrChangeLeftLeg}>
              <option value="1">Gold Element</option>
              <option value="2">Carbon Element</option>
              <option value="3">Water Molecule</option>
              <option value="4">Flame Change</option>
              <option value="5">Silicon Element</option>
            </select>

            <label htmlFor="rightLegTemp" className="role__parameter7--label">Role RightLeg Substance: *required</label>
            <select id="rightLegTemp" className="roleRightLeg" onChange={handleRoleAttrChangeRightLeg}>
              <option value="1">Gold Element</option>
              <option value="2">Carbon Element</option>
              <option value="3">Water Molecule</option>
              <option value="4">Flame Change</option>
              <option value="5">Silicon Element</option>
            </select>
            <EquipmentSelect />
            {isValid ? 
            <button type="submit" className="subscribe__submit" onClick={() => {modalRef.current.close(); ChangeNumberToLetter();}}>Subscribe</button>:
            <button type="submit" className="subscribe__submit" onClick={() => {modalRef.current.close(); ChangeNumberToLetter();}} disabled>Subscribe</button>
            }
            <button type="button" className="close" onClick={ () => modalRef.current.close() }>Cancel</button> 

        </form>
      </dialog>
</div>
  );
}

export default Main1ElementalPeopleImage;