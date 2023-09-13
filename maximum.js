//recherche d'un nombre maximum dans un tableau donne
const array = [12,56,-8, 7, 9, 5, -78, 89, -67778, 5353, -23, 89, 0];
var max = - Infinity;
for ( let i = 0; i < array.length; i++){
    if (array[i] > max){
        max = array[i];
    }
}
console.log(max);
