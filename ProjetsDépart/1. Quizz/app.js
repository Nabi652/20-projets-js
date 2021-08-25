const form = document.querySelector(".form-quizz");
let tableauResultats = [];
const reponses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");

//on va selectionner toutes nos question block pour leur ajouter des couleurs+animation
const toutesLesQuestions = document.querySelectorAll(".question-block");
//dans verifTableau il n'y aura que des true et des false
let verifTableau = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.querySelector('input[name="q1"]:checked').value);

  for (i = 1; i < 6; i++) {
    tableauResultats.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  // console.log(tableauResultats);
  //   console.log(tableauResultats);
  verifFunc(tableauResultats);
  tableauResultats = [];
});

function verifFunc(tabResultats) {
  for (let a = 0; a < 5; a++) {
    //si reponse vraie - si la valeur de tabresultats est égal à repnses
    if (tabResultats[a] === reponses[a]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  afficherResultats(verifTableau);
  couleursFonction(verifTableau);
  verifTableau = [];
}

function afficherResultats(tabCheck) {
  //tabcheck est un tableau à vérifier
  const nbDeFautes = tabCheck.filter((el) => el !== true).length; //va filtrer les éléments et va retourner un new tableau avec les éléments filtrés
  //au dessus : on va filtrer les éléments sctritement différents de true
  //   console.log(nbDeFautes); //si on log seulement les elements diff de true apparaitront cad "false"

  switch (
    nbDeFautes //à la place des if //en fonction de nbdefautes
  ) {
    case 0:
      titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`;
      aideResultat.innerText = ""; //on n'a pas de msg d'erreur car on a la note maximale
      noteResultat.innerText = "5/5";
      break;
    case 1:
      titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
      aideResultat.innerText =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      noteResultat.innerText = "4/5";
      break;
    case 2:
      titreResultat.innerText = `✨ Encore un effort ... 👀`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "3/5";
      break;
    case 3:
      titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "2/5";
      break;
    case 4:
      titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "1/5";
      break;
    case 5:
      titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "0/5";
      break;

    default:
      //si le cas n'est pas égal entre 0 et 5,il enverra le message suivant:
      "Wops, cas innatendu.";

    // case 0: // quand nbdefautes = 0
    //   //   titreResultat.innerText = `✔️Bravo, c'est un sans fautes! ✔️`;
    //   //on peut écrire comme au dessus ou comme en dessous avec ${}
    //   titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans fautes! ${emojis[0]}`;
    //   aideResultat.innerText = "";
    //   noteResultat.innerText = "5/5";
    //   break;

    //   case 0: // quand nbdefautes = 0
    //   //   titreResultat.innerText = `✔️Bravo, c'est un sans fautes! ✔️`;
    //   //on peut écrire comme au dessus ou comme en dessous avec ${}
    //   titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans fautes! ${emojis[0]}`;
    //   aideResultat.innerText = "";
    //   noteResultat.innerText = "5/5";
    //   break;
    //   case 1: // quand nbdefautes = 1
    //   //   titreResultat.innerText = `✔️Bravo, c'est un sans fautes! ✔️`;
    //   //on peut écrire comme au dessus ou comme en dessous avec ${}
    //   titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans fautes! ${emojis[0]}`;
    //   aideResultat.innerText = "";
    //   noteResultat.innerText = "5/5";
    //   break;
    //   case 2: // quand nbdefautes = 0
    //   //   titreResultat.innerText = `✔️Bravo, c'est un sans fautes! ✔️`;
    //on peut écrire comme au dessus ou comme en dessous avec ${}
    //   titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans fautes! ${emojis[0]}`;
    //   aideResultat.innerText = "";
    //   noteResultat.innerText = "5/5";
    //   break;
    //   case 4: // quand nbdefautes = 0
    //   //   titreResultat.innerText = `✔️Bravo, c'est un sans fautes! ✔️`;
    //   //on peut écrire comme au dessus ou comme en dessous avec ${}
    //   titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans fautes! ${emojis[0]}`;
    //   aideResultat.innerText = "";
    //   noteResultat.innerText = "5/5";
    //   break;
    //   case 4: // quand nbdefautes = 0
    //   //   titreResultat.innerText = `✔️Bravo, c'est un sans fautes! ✔️`;
    //   //on peut écrire comme au dessus ou comme en dessous avec ${}
    //   titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans fautes! ${emojis[0]}`;
    //   aideResultat.innerText = "";
    //   noteResultat.innerText = "5/5";
    //   break;
    //   case 5: // quand nbdefautes = 0
    //   //   titreResultat.innerText = `✔️Bravo, c'est un sans fautes! ✔️`;
    //   //on peut écrire comme au dessus ou comme en dessous avec ${}
    //   titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans fautes! ${emojis[0]}`;
    //   aideResultat.innerText = "";
    //   noteResultat.innerText = "5/5";
    //   break;
  }
}

function couleursFonction(tabValBool) {
  for (let j = 0; j < tabValBool.length; j++) {
    if (tabValBool[j] === true) {
      toutesLesQuestions[j].style.background = "lightgreen";
    } else {
      toutesLesQuestions[j].style.background = "#ffb8b8";
      toutesLesQuestions[j].classList.add("echec");

      setTimeout(() => {
        toutesLesQuestions[j].classList.remove("echec");
      }, 500);
    }
  }
}

//touteslesquestions = toutes les div regroupant les questions + reponses . Pour chaque 'item' (on peut l'appeler comme on veut)
//item = une div question-block
//au click, sur chaque bloc, il revient blanc

toutesLesQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.style = "white";
  });
});
