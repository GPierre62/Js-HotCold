console.log("début du script!");
var toto=0;
var min = 1;
var max =100;
var nbRandom= Math.floor(Math.random()* (max - min + 1))+ min;
console.log("le nombre choisit par l'ordinateur est "+nbRandom);

function saisieU(){
  var saisieU= document.getElementById('zoneS').value;
  console.log(saisieU);
  if (saisieU == nbRandom){
    document.getElementById("zoneDroite").innerHTML+="c'est gagné !!!";
    document.getElementById("zoneDroite").style.backgroundColor="green";
  }

  if (saisieU > nbRandom){
    document.getElementById("zoneDroite").innerHTML+="c'est moins !!!";
  }
  if (nbRandom > saisieU){
    document.getElementById("zoneDroite").innerHTML+="c'est plus !!!";
  }
}

/*while (nbRandom !=saisieU) {
    toto++;
    var nbUser = saisieU
    console.log("l'utilisateur à saisie :"+nbUser);

    if (isNaN(saisieU) || saisieU>100 || saisieU<0) {
    var nbUser = saisieU

    console.log("l'utilisateur à saisie :"+nbUser);
    }

    if(saisieU> nbRandom) {
      alert("c'est plus petit");
    }

    else if (saisieU< nbRandom) {
      alert("c'est plus grand");
    }
}
alert("Félicitation ! Vous avez le bon nombre");
console.log("l'utilisateur à fait "+toto+" essaie");*/
console.log("fin du script!");
