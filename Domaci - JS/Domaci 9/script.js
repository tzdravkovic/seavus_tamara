function generisi() {
  // Dohvatio ceo html element
  let red = document.getElementById("red");
  let kolona = document.getElementById("kolona");

  // Izvukao sta pise u elementu
  let redVrednost = red.value; // 2
  let kolonaVrednost = kolona.value; // 3

  let tabela = document.getElementsByTagName("tbody")[0];

  for (let i = 0; i < redVrednost; i++) {
    tabela.innerHTML += "<tr>";

    for (let j = 0; j < kolonaVrednost; j++) {
        tabela.innerHTML += "<td></td>";
    }

    tabela.innerHTML += "</tr>";
  }
}
