let nombres1 = [10, 55, 352, 4];
let nombres2 = [543, 40, 0, 34];

p = document.querySelector("p");
somme = 0;

for (i=0; i<nombres1.length; i++) {
    somme += nombres1[i]*nombres2[i];
}

p.innerHTML= somme;
