let utilisateurs = {
    user1: {
        nom: "Martin",
        age: 28,
        profession: "Ingénieur Logiciel",
        compétences: ["Java", "Python", "Docker"],
        adresse: {
            rue: "10 Rue de l'Innovation",
            ville: "Lyon",
            codePostal: "69000"
        }
    },
    user2: {
        nom: "Durand",
        age: 35,
        profession: "Designer Graphique",
        compétences: ["Photoshop", "Illustrator", "InDesign"],
        adresse: {
            rue: "55 Avenue de la Créativité",
            ville: "Marseille",
            codePostal: "13000"
        }
    },
    user3: {
        nom: "Lefebvre",
        age: 40,
        profession: "Analyste de Données",
        compétences: ["SQL", "R", "Tableau"],
        adresse: {
            rue: "20 Rue des Données",
            ville: "Nantes",
            codePostal: "44000"
        }
    }
};

p = document.querySelector("p");
let user = ""
for (let i =1; i<4; i++) {
    console.log(utilisateurs.user+i.nom + utilisateurs.user+i.age + utilisateurs.user+i.profession);
    user = "user" + i + ".nom"
}

p.innerHTML = user
