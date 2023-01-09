"use strict";
(function(){
    
    const buttonClick_1 = document.querySelector(".button__HPL");
    const buttonClick_2 = document.querySelector(".button__PC");
    const buttonClick_3 = document.querySelector(".button__ST");

    function whenYouClicked_1(){
        const whenButtonClick_1 = document.querySelector(".navigation__menu1");
        whenButtonClick_1.classList.toggle("deactivate");
    }

    buttonClick_1.addEventListener("click",whenYouClicked_1);



    function whenYouClicked_2(){
        const whenButtonClick_2 = document.querySelector(".navigation__menu2");
        whenButtonClick_2.classList.toggle("deactivate");
    }

    buttonClick_2.addEventListener("click",whenYouClicked_2);



    function whenYouClicked_3(){
        const whenButtonClick_3 = document.querySelector(".navigation__menu3");
        whenButtonClick_3.classList.toggle("deactivate");
    }

    buttonClick_3.addEventListener("click",whenYouClicked_3);




    let strEmail1;
    let strEmail2;
    let isInvalid = true ;
    var lenName;
    var lenEmail1;
    var lenEmail2


    const nameError = document.querySelector('.register-name__error'); 
    const nameFind = document.querySelector('.register__name'); 
    const email1Error = document.querySelector('.register-email1__error'); 
    const email1Find = document.querySelector('.email1'); 
    const email2Error = document.querySelector('.register-email2__error'); 
    const email2Find = document.querySelector('.email2'); 

    const nameFindBorder = document.querySelector('.register__label'); 
    const email1FindBorder = document.querySelector('.email__label1'); 
    const email2FindBorder = document.querySelector('.email__label2'); 

    const form = document.querySelector('.register'); 
    

    nameFind.addEventListener('input', (event) => {
        lenName=event.target.value.length;
        if((lenName<20)&&(lenName>0)){
            nameError.classList.remove('register-name--invalid');
            nameFindBorder.classList.remove('register__label--border');
        }
        else{
            nameError.classList.add('register-name--invalid');
            nameFindBorder.classList.add('register__label--border');
            isInvalid = true;  
        }
    });

    email1Find.addEventListener('input', (event) => {
        strEmail1=event.target.value;
        lenEmail1=event.target.value.length;
        if(lenEmail1){
            email1Error.innerText="";
            email1FindBorder.classList.remove('email__label1--border');
            isInvalid = false;
        }
        else{
            email1Error.innerText="This field is required and cannot be empty";
            email1FindBorder.classList.add('email__label1--border');
            isInvalid = true;  
        }
    });

    email2Find.addEventListener('input', (event) => {
        strEmail2=event.target.value;
        lenEmail2=event.target.value.length;
        if((strEmail2==strEmail1)&&(lenEmail2!=0)){
            email2Error.innerText="";
            email2FindBorder.classList.remove('email__label2--border');
            isInvalid = false;
        }
        else{
            email2Error.innerText="This field must match the email and cannot be empty";
            email2FindBorder.classList.add('email__label2--border');
            isInvalid = true;  
        }
    });


    form.addEventListener('submit', (event) => { 
        if( isInvalid ) {
             event.preventDefault(); 
        }
    })

})();

