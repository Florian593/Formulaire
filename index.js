let myform = document.getElementById('myform')
let age = 18;



myform.addEventListener('submit', function(e){
    let myNom = document.getElementById("nom");
    let myPrenom = document.getElementById("prenom");
    let myMail = document.getElementById("email");
    let myDate = document.getElementById("date");
    let myMdp = document.getElementById("mdp");
    let myMdp2 = document.getElementById("mdp2");

    let myRegex = /^[a-zA-Z-\s]+$/;

    if (myNom.value.trim() == "") {
        let myError = document.getElementById('errorNom');
        myError.innerHTML = "Le champs est requis";
        myError.style.color = 'red';
        e.preventDefault();
    } else if (myRegex.test(myNom.value) == false) {
        let myError = document.getElementById('errorNom');
        myError.innerHTML = "Le nom doit comporter des lettres, des tirets uniquements.";
        myError.style.color = 'red';
        e.preventDefault();
    }
    
    if (myPrenom.value.trim() == "") {
        let myError = document.getElementById('errorPrenom');
        myError.innerHTML = "Le champs est requis";
        myError.style.color = 'red';
        e.preventDefault();
    } else if (myRegex.test(myPrenom.value) == false) {
        let myError = document.getElementById('errorPrenom');
        myError.innerHTML = "Le nom doit comporter des lettres, des tirets uniquements.";
        myError.style.color = 'red';
        e.preventDefault();
    }

    if (myMdp.value.trim() == "") {
        let myErrorMdp = document.getElementById('errorMdp');
        myErrorMdp.innerHTML = "Le champs est requis";
        myErrorMdp.style.color = 'red';
        e.preventDefault();
    }

    else if (myMdp.value != myMdp2.value) {
        let myErrorMdp = document.getElementById('errorMdp');
        myErrorMdp.innerHTML = "Les mots de passe ne sont pas identique";
        myErrorMdp.style.color = 'red';
        e.preventDefault();
    }

    if (myMdp2.value.trim() == "") {
        let myErrorMdp2 = document.getElementById('errorMdp2');
        myErrorMdp2.innerHTML = "Le champs est requis";
        myErrorMdp2.style.color = 'red';
        e.preventDefault();
    }

    else if (myMdp.value != myMdp2.value) {
        let myErrorMdp2 = document.getElementById('errorMdp2');
        myErrorMdp2.innerHTML = "Les mots de passe ne sont pas identique";
        myErrorMdp2.style.color = 'red';
        e.preventDefault();
    }
    
})