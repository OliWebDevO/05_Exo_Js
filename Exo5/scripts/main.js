let p = document.querySelector("p");
date = new Date();
day = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
today = day[date.getDay()];
p.innerHTML = today + " " + date.getHours() + ":" + date.getMinutes();
