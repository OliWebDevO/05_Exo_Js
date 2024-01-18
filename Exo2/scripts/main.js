
let n = 1;
let p = document.querySelector("p");
p.innerHTML= n;
let augmenter = document.querySelector(".augmenter");
let diminuer = document.querySelector(".diminuer");

augmenter.addEventListener('click', function() {
    p.innerHTML = n++;
})

diminuer.addEventListener('click', function() {
    p.innerHTML = n--;
})
// console.log(augmenter);

