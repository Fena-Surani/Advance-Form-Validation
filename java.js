window.onload=function(){
    
    //Firstname Validation :- -  - -----
    var firstname=document.getElementById("first-name");
    firstname.onblur=function firstnameEmpty(){
        var firstnameValue=firstname.value;

        if(firstnameValue == ""){
            var firstnamewarning=document.getElementById("firstname-wrn");

            firstname.style.borderBottom="1px solid red";
            firstname.style.transition="0.3s";
            firstnamewarning.style.display="block";
            firstnamewarning.className="animate__animated animate__fadeIn";

            var firstnameMessage=document.getElementById("firstname-message");

            firstnameMessage.style.display="block";
            firstnameMessage.className="animate__animated animate__fadeIn";
        }
        firstname.onclick=function(){
            var firstnamewarning=document.getElementById("firstname-wrn");
            
            firstnamewarning.style.display="none";
            firstname.style.borderBottom="1px solid #ccc";
            firstnameMessage.style.display="none";

            firstname.onblur=function(){
                firstnameEmpty();
            }
        } 
    }

     //Last Name validation :--------
     var lastname=document.getElementById("lsat-name");
     lastname.onblur=function lastnameEmpty(){
        var lastnamevalue=lastname.value;
        
        if(lastnamevalue == ""){
            var lastnamewarning=document.getElementById("lastname-wrn");
            lastnamewarning.style.display="block";
            lastnamewarning.className="animate__animated animate__fadeIn";

            var lastnamemessage=document.getElementById("lastname-message");

            lastnamemessage.style.display="block";
            lastnamemessage.className="animate__animated animate__fadeIn";

            lastname.style.borderBottom="1px solid red";

            lastname.className="animate__animated animate__fadeIn";

            lastname.onclick=function(){
                lastnamewarning.style.display="none";
                lastnamemessage.style.display="none";
                lastname.style.borderBottom="1px solid #ccc";

                lastname.onblur=function(){
                    lastnameEmpty();
                }
            }
        }
     }

     //email Address validation
    var email=document.getElementById("email");
    email.onblur=function lastnameEmpty(){
        var emailvalue=email.value;
        
        if(emailvalue == ""){
            var emailwarning=document.getElementById("email-wrn");
            emailwarning.style.display="block";
            emailwarning.className="animate__animated animate__fadeIn";

            var emailmessage=document.getElementById("email-message");

           emailmessage.style.display="block";
            emailmessage.className="animate__animated animate__fadeIn";

            email.style.borderBottom="1px solid red";

            email.className="animate__animated animate__fadeIn";

            email.onclick=function(){
                emailwarning.style.display="none";
                emailmessage.style.display="none";
                email.style.borderBottom="1px solid #ccc";

               email.onblur=function(){
                    lastnameEmpty();
                }
            }
        }
     }

     //Password Validation

     var password=document.getElementById("password");
     var passwordHintDiv=document.getElementById("password-hint");

    //  password.onblur=function passwordEmpty(){
    //      var passwordvalue=password.value;
    //      if(passwordvalue == ""){
    //         passwordHintDiv.style.display="none";
    //          var passwordwarning=document.getElementById("password-wrn");
    //          passwordwarning.style.display="block";
    //          passwordwarning.className="animate__animated animate__fadeIn";
 
    //         var passwordmessage=document.getElementById("password-message");
    //         passwordmessage.style.display="block";
    //         passwordmessage.className="animate__animated animate__fadeIn";
 
    //         password.style.borderBottom="1px solid red";
    //         password.className="animate__animated animate__fadeIn";

    //         password.onclick=function(){
    //             passwordwarning.style.display="none";
    //             passwordmessage.style.display="none";
    //             password.style.borderBottom="1px solid #ccc";

    //            password.onblur=function(){
    //                 passwordEmpty();
    //             }
    //         }
    //      }
    //  }
     

         password.onclick=function(){
                passwordHintDiv.style.display="block";
        
        var passwordhinttext=document.getElementById("password-hint-text");
             passwordhinttext.onclick=function(){
                    password.value= passwordhinttext.innerHTML;
                    passwordHintDiv.style.display="none";
                }
            }
                
            password.oninput=function(){
                passwordHintDiv.style.display="none";
                var passwordwarning=document.getElementById("password-wrn");
                passwordwarning.style.display="none";
                password.style.borderBottom="1px solid #ccc";
                var passwordmessage=document.getElementById("password-message");
                passwordmessage.style.display="none";
                
                var lower=/[a-z]/;
                var upper=/[A-Z]/;
                var number=/[0-9]/;
                var special=/[!/@/#/$/%/^/&/*]/;
                var passwordvalue=password.value;
                var lowercase=document.getElementById("lower-case");
                !passwordvalue.match(lower) ? lowercase.style.display="block" : lowercase.style.display="none";

                var uppercase=document.getElementById("upper-case");
                !passwordvalue.match(upper) ? uppercase.style.display="block" : uppercase.style.display="none";

                 var numberele=document.getElementById("number");
                !passwordvalue.match(number) ? numberele.style.display="block" : numberele.style.display="none";

                var specialsymbol=document.getElementById("special-symbol");
                 !passwordvalue.match(special) ? specialsymbol.style.display="block" : specialsymbol.style.display="none";
            }      
        
        
    //Password toggle
      var checkbox=document.getElementById("checkbox");
     var checkboxMessage=document.getElementById("checkbox-message");

     checkbox.onclick=function(){
        if(checkbox.value == "show password"){
            password.type="text";
            checkbox.value="hide password";
            checkboxMessage.innerHTML="Hide password";

        }
        else{
            password.type="password";
            checkbox.value="show password";
            checkboxMessage.innerHTML="Show password";
        }
     }

    

     var fromele=document.getElementById("form-ele");
     var value=0;
     fromele.onsubmit=function(e){
        e.preventDefault();

        var firstnameValue=firstname.value;
        var lastnamevalue=lastname.value;
        var emailvalue=email.value;
        var passwordvalue=password.value;

       
        if(firstnameValue == "")
            {
                var firstnameMessage=document.getElementById("firstname-message");
                firstnameMessage.style.display="block";

                var firstnamewrn=document.getElementById("firstname-wrn");
                firstnamewrn.style.display="block";

                firstnameMessage.className="animate__animated animate__fadeIn";
                firstnamewrn.className="animate__animated animate__fadeIn";

                firstname.onclick=function(){
                    firstnameMessage.style.display="none";
                    firstnamewrn.style.display="none";
                }
            }

        if(lastnamevalue == "")
          {
                    var lastnameMessage=document.getElementById("lastname-message");
                    lastnameMessage.style.display="block";
    
                    var lastnamewrn=document.getElementById("lastname-wrn");
                    lastnamewrn.style.display="block";
    
                    lastnameMessage.className="animate__animated animate__fadeIn";
                    lastnamewrn.className="animate__animated animate__fadeIn";
    
                    lastname.onclick=function(){
                        lastnameMessage.style.display="none";
                        lastnamewrn.style.display="none";
                    }
          }
          if(emailvalue == "")
         {
                        var emailmessage=document.getElementById("email-message");
                        emailmessage.style.display="block";
        
                        var emailwrn=document.getElementById("email-wrn");
                        emailwrn.style.display="block";
        
                        emailmessage.className="animate__animated animate__fadeIn";
                        emailwrn.className="animate__animated animate__fadeIn";
        
                        email.onclick=function(){
                            emailmessage.style.display="none";
                            emailwrn.style.display="none";
                        }
        }
       if(passwordvalue == "")
     {
                            var passwordmessage=document.getElementById("password-message");
                            passwordmessage.style.display="block";
            
                            var passwordwrn=document.getElementById("password-wrn");
                            passwordwrn.style.display="block";
            
                            passwordmessage.className="animate__animated animate__fadeIn";
                            passwordwrn.className="animate__animated animate__fadeIn";
            
                            password.onclick=function(){
                                passwordmessage.style.display="none";
                                passwordwrn.style.display="none";
                            }
        }
        if(!(firstnameValue == "" && lastnamevalue == "" && emailvalue == "" && passwordvalue == ""))
         {
                                Swal.fire({
                                     title: "success",
                                     text:"Register success",
                                     icon:"success"
                                 });
                            //alert("Your Form subbmited SuccesFully !");  
                            
        }
      
     }
    

 }

