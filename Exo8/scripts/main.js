let nombres = [35, 22, 153, 5, 67, 256599];
let p = document.querySelector("p");
let somme = 0;

for (let i = 0; i < nombres.length; i++) {
somme += nombres[i]
}
p.innerHTML = somme;    