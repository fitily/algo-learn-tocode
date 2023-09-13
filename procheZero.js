let tab = [4, 5, 9, -2, 5, -7, -9, -6789, -0.7, -0.7, 9876, 1.2, -0.4, -0.1];
let tab1 = [];
let min = Infinity;
let compteur = 0;
// Mettre les valeurs dans tab en valeur absolue
for(let i = 0; i < tab.length; i++){
    if(tab[i] < 0){
        tab1[i] = - tab[i];
    }
    else if(tab[i] >= 0){
        tab1[i] = tab[i];
    }
}
// chercher des valeur minimale parmis les nombre de valeur absolue, ce qui est surement proche de zero
for ( let j = 0; j < tab1.length; j++){
    if (tab1[j] < min){
        compteur = j;
    }
}
// affichage de valeur plus proche de zero en ayant l'indice dans tab1
console.log("le nombre le plus proche de zero parmi les valeurs dans tab est" + " " + tab[compteur]); 