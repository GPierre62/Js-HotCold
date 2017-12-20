/*les tours et les essaies devrait aparaitre dans le console log mais j'ai choisit de le mettre en visuel*/
console.log("Début du script!");
var toto=0;
var min = 1;
var max =100;
var nbRandom= Math.floor(Math.random()* (max - min + 1))+ min;
console.log("le nombre choisit par l'ordinateur est "+nbRandom);

function saisieU(){
  var flemard=" essaie n° "+(toto+1);
  var saisieU=document.getElementById('zoneS').value;
  toto++;
  console.log(saisieU);
  console.log("essaie n°"+toto);
  if (isNaN(saisieU) || saisieU>100 || saisieU<0) {
    document.getElementById("zoneDroite").innerHTML+="un nombre de 0 à 100!!! ==>" +saisieU+ flemard+"<br>";
  }

  if (saisieU == nbRandom){
    document.getElementById("zoneDroite").innerHTML+="c'est gagné !!! ==>" + saisieU+ flemard+"<br>";
    document.getElementById("zoneDroite").style.backgroundColor="green";
    document.getElementById("trololol").style.textDecoration="blink";
    console.log("Fin du script!");
    document.getElementById("zoneB").style.display="none";
    document.getElementById("zoneB2").style.display="block"
  }

  if (saisieU > nbRandom){
    document.getElementById("zoneDroite").innerHTML+="c'est moins !!! ==>" +saisieU+ flemard+"<br>";
  }

  if (nbRandom > saisieU){
    document.getElementById("zoneDroite").innerHTML+="c'est plus !!! ==>" +saisieU+ flemard+"<br>";
  }
  if(toto==5){
    if(nbRandom<= 10 &&nbRandom>=1){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 1 et 10" +"<br>";
    }

    if(nbRandom<= 20 &&nbRandom>=11){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 11 et 20" +"<br>";
    }
    if(nbRandom<= 30 &&nbRandom>=21){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 21 et 30" +"<br>";
    }
    if(nbRandom<= 40 &&nbRandom>=31){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 31 et 40" +"<br>";
    }
    if(nbRandom<= 50 &&nbRandom>=41){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 41 et 50" +"<br>";
    }
    if(nbRandom<= 60 &&nbRandom>=51){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 51 et 60" +"<br>";
    }
    if(nbRandom<= 70 &&nbRandom>=61){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 61 et 70" +"<br>";
    }
    if(nbRandom<= 80 &&nbRandom>=71){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 71 et 80" +"<br>";
    }
    if(nbRandom<= 90 &&nbRandom>=81){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 81 et 90" +"<br>";
    }
    if(nbRandom<= 100 &&nbRandom>=91){
      document.getElementById("zoneDroite").innerHTML+="Le nombre se situe entre 91 et 100" +"<br>";
    }
  }
  else if(toto==10){
    alert("C'est perdu noob !");
    console.log("Fin du script !");
    window.location.reload();/* recherge la page pour reset le jeux*/
  }

}

function bonus(){/* perme le reset du jeux quand celui-ci est gagné*/
    window.location.reload(true);
}
