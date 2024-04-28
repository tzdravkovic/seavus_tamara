let zivotinja = {
    ime: "Edi",
    vrsta: "pas",
    govori: function () {
        console.log ('Cao ja sam ' + this.ime + ' i ja sam ' + this.vrsta)
    }
}

zivotinja.govori()



let knjiga = {
    ime: "Stranac",
    autor: "Albert Kami",
    procitao: true,
    statusCitanja: function () {
        if(this.procitao === true) {
            console.log("Procitao sam knjigu " + this.ime + " koju je napisao " + this.autor)
        }else {
            console.log("Jos uvek nisam procitala knjigu " + this.ime + " od autora " + this.autor)
        }
    }
}

knjiga.statusCitanja()
