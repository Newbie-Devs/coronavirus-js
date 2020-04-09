//author: fededev01
//version: 1.0.7

function giorno(positivi, guariti, morti, totali) 
{
this.positivi = positivi;
this.guariti = guariti;
this.morti = morti;
this.totali = totali;
}
var g1 = new giorno(1577, 83, 34, 1694);
var g2 = new giorno(1835, 149, 52, 2036);
var g3 = new giorno(2263, 160, 79, 2502);
var g4 = new giorno(2706, 276, 107, 3089);
var g5 = new giorno(3296, 414, 148, 3858);
var g6 = new giorno(3916, 523, 197, 4636);
var g7 = new giorno(5061, 589, 233, 5883);
var g8 = new giorno(6387, 622, 366, 7375);
var g10 = new giorno(8514, 1004, 631, 10149);
var g11 = new giorno(10590, 1045, 827, 12462);
var g12 = new giorno(12839, 1258, 1016, 15113);
var g13 = new giorno(14955, 1439, 1266, 17660); 
var g14 = new giorno(17750, 1966, 1441, 21157);
var g15 = new giorno(20603, 2335, 1809, 24747);
var g16 = new giorno(23073, 2749, 2158, 27980);
var g17 = new giorno(26062, 2941, 2503, 31506);
var g18 = new giorno(28710, 4025, 2978, 35713);
var g19 = new giorno(33190, 4440, 3405, 41035);
var g20 = new giorno(37860, 5129, 4032, 47021);
var g21 = new giorno(42681, 6072, 4825, 53578);
var g22 = new giorno(46638, 7024, 5476, 59138);
var g23 = new giorno(50418, 7432, 6077, 63927);
var g24 = new giorno(54030, 8326, 6820, 69176);
var g25 = new giorno(57521, 9362, 7503, 74386);
var g26 = new giorno(62013, 10361, 8165, 80539);
var g27 = new giorno(66414, 10950, 9134, 86498);


alert("ESEMPIO: Se vuoi ricevere il bollettino del 14 marzo, dovrai scrivere nel prompt SOLO la cifra 14");
var newdate = prompt("Scrivi il numero del giorno del bollettino che vuoi ti venga mostrato");

switch (newdate) {
case "1":
