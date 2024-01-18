let tab = [4, 60, 88, 127, 36, 95, 44, 55];

li = document.querySelector("li");
let i=0;
let n=1;
// li.innerHTML = tab;
// document.querySelector(".li1").innerHTML = tab [0]
// document.querySelector(".li2").innerHTML = tab [1]

let moyenne = document.querySelector(".moyenne");
let p = document.querySelector("p")

moyenne.addEventListener('click', function() {
    p.innerHTML = (tab[0] + tab[1] + tab[2] + tab[3] + tab[4] + tab[5] + tab[6] + tab[7] ) / 8 
 } );

for (let i =0; i<9;i++) {
    document.querySelector(".li" + n++).innerHTML = tab[i];
}



    





