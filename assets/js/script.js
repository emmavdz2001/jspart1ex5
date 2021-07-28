// Déclaration variable validButton qui contient notre bouton.
var validButton = document.getElementById('validButton');
// On écoute l'evènement clic sur le bouton et on appelle la fonction 'division'.
validButton.addEventListener('click', division);
// Déclaration de la fonction division qui nous affiche le reste de la division de 2 nombres.
function division() {
// Déclare la variable firstNumber qui contient la valeur du premier champ.
    var firstNumber = document.getElementById('dividend').value;
// Déclare la variable secondNumber qui contient la valeur du deuxième champ.
    var secondNumber = document.getElementById('divider').value;
// Condition : Si nb1 ou nb2 n'est pas un nombre alors...
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
// ... on affiche un message d'erreur.
        alert('Vous devez saisir un nombre !');
// Sinon...
    } else {
// Condition : Si nb2 est = 0 alors...
        if (secondNumber == 0) {
// ... on affiche un message d'erreur.
            alert('Le calcul n\'est pas possible !');
//  Sinon... 
        } else {
// ... On calcule le reste de la division. (modulo : %)
            var result = firstNumber % secondNumber;
//  On affiche le résultat.
            alert('Voici le reste de votre division : ' + result);
        }
    }
}

