let lista = document.getElementById("lista");
let zbir = document.getElementById("zbir");

let niz = [2, 4, 5];
let sabiranje = 0;

for (let i = 0; i < niz.length; i++) {
  sabiranje = niz[i] + sabiranje;
  lista.innerHTML += "<li>" + niz[i] + "</li>";
}

zbir.innerHTML = "Zbir je " + sabiranje;
