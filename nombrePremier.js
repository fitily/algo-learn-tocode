let nbr = 9;
let compteur = 0;
for (let i = 1; i <= nbr; i++){
    res = nbr % i;
    if (res == 0){
        compteur++;
    }
}
if(compteur == 2){
    console.log("premier");
}
else{
    console.log("non premier");
}
