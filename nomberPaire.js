let tab = [];
let somme = 0;
for(let i = 1; i < 34; i++){
    if( i % 2 == 1){
        tab[i] = i;
        somme += tab[i];
        console.log(tab[i]); //affichage des listes des nombres impaires entre 0 et 34
    }
}
somme += 34;
console.log("somme des nombre impaires entre 0 et 34 y compris est:" + " " + somme);