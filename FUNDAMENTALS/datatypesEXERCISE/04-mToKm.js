// You will be given a number that will be the distance in meters. Write a program that converts meters to kilometers
//  formatted to the second decimal point.
function mToKm (meters){
 let kilometers = meters/1000;
 console.log(kilometers.toFixed(2));
}
mToKm(1852)