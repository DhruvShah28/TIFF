window.onload = function(){
    // declarations
    const formhandler = document.forms.register_form;
    const login_formhandler = document.forms.login_form;

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
        const email_regex = /^[A-Za-z]+@[A-Za-z]+\.[a-zA-Z]{2,}$/;

        let validation = false;

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
                sign_up: sign_up.value,
            }

            console.log(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            
            console.log(localStorage.getItem("user")); 

            if(email.value === "" || !email_regex.test(email.value)){
                email.style.borderColor = "red"
                email.focus();
                validation = false;
                return false;
            }else{
                email.style.borderColor = "revert"
                validation = true;
            }
        }

    }

    if(login_formhandler){
        let log_email = login_formhandler.log_email;
        let log_pass = login_formhandler.log_email;

        let user_data = JSON.parse(localStorage.getItem("user"));
        log_email.value = user_data.email;

        let user_pass = user_data.pass;

    }

}