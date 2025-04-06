window.onload = function(){
    // declarations
    const formhandler = document.forms.register_form;
    const login_formhandler = document.forms.login_form;
    const pay_formhandler = document.forms.payementForm;

    const errorSection = document.querySelector("#err_sec");
    const error = document.querySelector("#error_text");

    if(formhandler){
        let email = formhandler.email;
        let pass = formhandler.pass;
        let conf_pass = formhandler.conf_pass;
        let fname = formhandler.fname;
        let lname = formhandler.lname;
        let dob = formhandler.dob;
        let lang = formhandler.lang;
        let country = formhandler.country;
        let postal = formhandler.postal;
        let sign_up = formhandler.terms;

        const name_regex = /^[A-Za-z]+$/;
        const email_regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const pass_regex = /^(?=.*[\W_]).{8,}$/;

        let validation = false;

        // function togglePassword(id) {
        //     alert("oo paji");
        //     const passwordInput = document.getElementById(id);
        //     const toggleBtn = document.querySelector(".toggle-pass");
    
        //     if (passwordInput.type === "password") {
        //         passwordInput.type = "text";
        //         toggleBtn.textContent = "🙈"; // Change to hide icon
        //     } else {
        //         passwordInput.type = "password";
        //         toggleBtn.textContent = "👁️"; // Change back to eye icon
        //     }
        // }

        // onsubmit function
        formhandler.onsubmit = (e) => {
            
            let userData = {
                email: email.value,
                pass: pass.value,
                conf_pass: conf_pass.value,
                fname: fname.value,
                lname: lname.value,
                dob: dob.value,
                lang: lang.value,
                country: country.value,
                postal: postal.value,
                sign_up: sign_up.checked,
            }

            console.log(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            
            console.log(localStorage.getItem("user")); 

            if(email.value === "" || !email_regex.test(email.value)){
                email.style.borderColor = "red";
                email.focus();
                errorSection.style.display = "block";
                error.innerHTML = "Please Enter a Valid Email";
                validation = false;
                return false;
            }else{
                email.style.borderColor = "revert"
                errorSection.style.display = "none";
                validation = true;
            }

            if(pass.value === "" || !pass_regex.test(pass.value)){
                pass.style.borderColor = "red";
                pass.focus();
                errorSection.style.display = "block";
                error.innerHTML = "<ul><span>Password must include</span><li>8 characters</li><li>At least one special character</li></ul>";
                validation = false;
                return false;
            }else{
                pass.style.borderColor = "revert"
                errorSection.style.display = "none";
                validation = true;
            }

            if(conf_pass.value !== pass.value){
                conf_pass.style.borderColor = "red";
                conf_pass.focus();
                errorSection.style.display = "block";
                error.innerHTML = "Passwords Dont Match";
                validation = false;
                return false;
            }else{
                conf_pass.style.borderColor = "revert"
                errorSection.style.display = "none";
                validation = true;
            }

            if(fname.value === "" || !name_regex.test(fname.value)){
                fname.style.borderColor = "red";
                fname.focus();
                errorSection.style.display = "block";
                error.innerHTML = "Please Enter a Valid First Name";
                validation = false;
                return false;
            }else{
                fname.style.borderColor = "revert"
                errorSection.style.display = "none";
                validation = true;
            }

            if(lname.value === "" || !name_regex.test(lname.value)){
                lname.style.borderColor = "red";
                lname.focus();
                errorSection.style.display = "block";
                error.innerHTML = "Please Enter a Valid First Name";
                validation = false;
                return false;
            }else{
                lname.style.borderColor = "revert"
                errorSection.style.display = "none";
                validation = true;
            }

            if(sign_up.checked === false){
                sign_up.style.borderColor = "red";
                sign_up.focus();
                errorSection.style.display = "block";
                error.innerHTML = "You need to confirm the Terms and Conditions and Privacy Policies";
                validation = false;
                return false;
            }else{
                sign_up.style.borderColor = "revert"
                errorSection.style.display = "none";
                validation = true;
            }
            
        }

    }

    if(login_formhandler){
        // Declarations
        let log_email = login_formhandler.log_email;
        let log_pass = login_formhandler.log_pass;
        
        const errorSection = document.querySelector("#err_sec");
        const error = document.querySelector("#error_text");

        let user_data = JSON.parse(localStorage.getItem("user"));
        log_email.value = user_data.email;
        let stored_pass =  user_data.pass;

        let validation = false;

        login_formhandler.onsubmit = function(){


            if(log_pass.value !== stored_pass){
                log_pass.style.borderColor = "red";
                log_pass.focus();
                errorSection.style.display = "block";
                error.innerHTML = "Incorrect Password";
                validation = false;
                return false;
            }else{
                log_pass.style.borderColor = "revert"
                errorSection.style.display = "none";
                validation = true;
            }
        }
    }

    if(pay_formhandler){
        let cardname = pay_formhandler.cardName;
        let user_data = JSON.parse(localStorage.getItem("user"));
        const confemail = document.getElementById("conf_email");
        let screenprice = document.getElementById("screen_price");
        let taxprice = document.getElementById("tax_price");
        let total_price = document.getElementById("total_price");

        let random_price = ((Math.random() * (30 - 20 + 1)) + 20).toFixed(2);
        let tax = 0.13;
        let priceNum = parseFloat(random_price);
        let taxAmount = priceNum * tax;
        let total = priceNum + taxAmount;
        
        screenprice.innerHTML = random_price;
        taxprice.innerHTML = taxAmount.toFixed(2);
        total_price.innerHTML = total.toFixed(2);

        confemail.innerHTML = user_data.email
        cardname.value = (user_data.fname + " " + user_data.lname);



    }


}