var vraag0 = prompt("Is de kaas geel ?");

if (vraag0 == "ja"){
  var vraag1 = prompt("Zitten er gaten in?");

  if (vraag1 =="ja"){
      var vraag2 = prompt("is de kaas belachelijk duur?")

      if (vraag2 =="ja"){
          alert("Emmenthaler");
      }else {
        alert("Leerdammer");
      }
  }else{
    var vraag4 = prompt("is de kaas hard als steen?")
    if (vraag4 =="ja"){
      alert("Parmigiano Reggiano");
    }else {
      alert("Goudse Kaas");
    }
  }
}else {
  var vraag5 = prompt("Heeft de kaas blauwe schimmels?")

  if (vraag5 =="ja"){
    var vraag6 = prompt("Heeft de kaas een korst?");

  if (vraag6 =="ja"){
    alert("Bleu de Rochbaron")
  }else{
    alert("Foume d'Ambert")
  }
  }else {
    var vraag7 = prompt("Heeft de kaas een korst?")

    if (vraag7 == "ja"){
      alert ("Camembert")
    }else{
      alert ("Mozzarella")
    }
  }


}
