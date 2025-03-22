window.onload = function(){
    // declarations
    const formhandler = document.forms.register_form;

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

    const errorSection = document.querySelector("#err_sec");
    const error = document.querySelector("#error_text");

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
    }
}