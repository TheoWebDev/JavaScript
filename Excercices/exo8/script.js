var a = prompt("Entrez votre note")

  if (a < 4) {
    alert("Nul");
  }
  else if (a < 7) {
    alert("Moyen");
  }
  else if (a < 9) {
    alert("Assez bien");
  }
  else if (a < 10) {
    alert("Bien");
  }
  else if (a == 10) {
    alert("Excellent");
  }
  else {
    alert("Veuillez saisir un nombre entre 0 et 10 compris.")
  }