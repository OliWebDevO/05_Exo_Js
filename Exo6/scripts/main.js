let oliver = {
    nom : "vdb",
    prenom : "oliver",
    age : 31
}

let titre = document.querySelector("h1");
indice = document.querySelector("sub");
titre.innerHTML = "je m'appelle " + oliver.prenom + " " + oliver.nom
indice.innerHTML = "j'ai " + oliver.age + " ans" ;