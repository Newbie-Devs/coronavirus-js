//author: fededev01
//version: 1.0.4

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

alert("ESEMPIO: Se vuoi ricevere il bollettino del 14 marzo, dovrai scrivere nel prompt SOLO la cifra 14");
var newdate = prompt("Scrivi il numero del giorno del bollettino che vuoi ti venga mostrato");

switch (newdate) {
case "1":
document.writeln("Bollettino del 01/03" + "<br />");
document.writeln(g1.positivi + " positivi" + "<br />");
document.writeln(g1.guariti + " guariti" + "<br />");
document.writeln(g1.morti + " morti" + "<br />");
document.writeln(g1.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "2":
document.writeln("Bollettino del 02/03" + "<br />"); 
document.writeln(g2.positivi + " positivi" + "<br />");
document.writeln(g2.guariti + " guariti" + "<br />");
document.writeln(g2.morti + " morti" + "<br />");
document.writeln(g2.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "3":
document.writeln("Bollettino del 03/03" + "<br />");
document.writeln(g3.positivi + " positivi" + "<br />");
document.writeln(g3.guariti + " guariti" + "<br />");
document.writeln(g3.morti + " morti" + "<br />");
document.writeln(g3.totali + " totali" + "<br />");
document.writeln("<br />");
break;
	
case "4":
document.writeln("Bollettino del 04/03" + "<br />");
document.writeln(g4.positivi + " positivi" + "<br />");
document.writeln(g4.guariti + " guariti" + "<br />");
document.writeln(g4.morti + " morti" + "<br />");
document.writeln(g4.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "5":
document.writeln("Bollettino del 05/03" + "<br />"); 
document.writeln(g5.positivi + " positivi" + "<br />");
document.writeln(g5.guariti + " guariti" + "<br />");
document.writeln(g5.morti + " morti" + "<br />");
document.writeln(g5.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "6":
document.writeln("Bollettino del 06/03" + "<br />");
document.writeln(g6.positivi + " positivi" + "<br />");
document.writeln(g6.guariti + " guariti" + "<br />");
document.writeln(g6.morti + " morti" + "<br />");
document.writeln(g6.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "7":
document.writeln("Bollettino del 07/03" + "<br />"); 
document.writeln(g7.positivi + " positivi" + "<br />");
document.writeln(g7.guariti + " guariti" + "<br />");
document.writeln(g7.morti + " morti" + "<br />");
document.writeln(g7.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "8":
document.writeln("Bollettino del 08/03" + "<br />"); 
document.writeln(g8.positivi + " positivi" + "<br />");
document.writeln(g8.guariti + " guariti" + "<br />");
document.writeln(g8.morti + " morti" + "<br />");
document.writeln(g8.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "9":
document.writeln("Non è stato trovato alcun bollettino corrispondente al 9 marzo");
break;

case "10":
document.writeln("Bollettino del 10/03" + "<br />"); 
document.writeln(g10.positivi + " positivi" + "<br />");
document.writeln(g10.guariti + " guariti" + "<br />");
document.writeln(g10.morti + " morti" + "<br />");
document.writeln(g10.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "11":
document.writeln("Bollettino del 11/03" + "<br />"); 
document.writeln(g11.positivi + " positivi" + "<br />");
document.writeln(g11.guariti + " guariti" + "<br />");
document.writeln(g11.morti + " morti" + "<br />");
document.writeln(g11.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "12":
document.writeln("Bollettino del 12/03" + "<br />"); 
document.writeln(g12.positivi + " positivi" + "<br />");
document.writeln(g12.guariti + " guariti" + "<br />");
document.writeln(g12.morti + " morti" + "<br />");
document.writeln(g12.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "13":
document.writeln("Bollettino del 13/03" + "<br />"); 
document.writeln(g13.positivi + " positivi" + "<br />");
document.writeln(g13.guariti + " guariti" + "<br />");
document.writeln(g13.morti + " morti" + "<br />");
document.writeln(g13.totali + " totali" + "<br />");
document.writeln("<br />");
break;	
	
case "14":
document.writeln("Bollettino del 14/03" + "<br />");
document.writeln(g14.positivi + " positivi" + "<br />");
document.writeln(g14.guariti + " guariti" + "<br />");
document.writeln(g14.morti + " morti" + "<br />");
document.writeln(g14.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "15":
document.writeln("Bollettino del 15/03" + "<br />"); 
document.writeln(g15.positivi + " positivi" + "<br />");
document.writeln(g15.guariti + " guariti" + "<br />");
document.writeln(g15.morti + " morti" + "<br />");
document.writeln(g15.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "16":
document.writeln("Bollettino del 16/03" + "<br />");
document.writeln(g16.positivi + " positivi" + "<br />");
document.writeln(g16.guariti + " guariti" + "<br />");
document.writeln(g16.morti + " morti" + "<br />");
document.writeln(g16.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "17":
document.writeln("Bollettino del 17/03" + "<br />"); 
document.writeln(g17.positivi + " positivi" + "<br />");
document.writeln(g17.guariti + " guariti" + "<br />");
document.writeln(g17.morti + " morti" + "<br />");
document.writeln(g17.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "18":
document.writeln("Bollettino del 18/03" + "<br />"); 
document.writeln(g18.positivi + " positivi" + "<br />");
document.writeln(g18.guariti + " guariti" + "<br />");
document.writeln(g18.morti + " morti" + "<br />");
document.writeln(g18.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "19":
document.writeln("Bollettino del 19/03" + "<br />"); 
document.writeln(g19.positivi + " positivi" + "<br />");
document.writeln(g19.guariti + " guariti" + "<br />");
document.writeln(g19.morti + " morti" + "<br />");
document.writeln(g19.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "20":
document.writeln("Bollettino del 20/03" + "<br />"); 
document.writeln(g20.positivi + " positivi" + "<br />");
document.writeln(g20.guariti + " guariti" + "<br />");
document.writeln(g20.morti + " morti" + "<br />");
document.writeln(g20.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "21":
document.writeln("Bollettino del 21/03" + "<br />"); 
document.writeln(g21.positivi + " positivi" + "<br />");
document.writeln(g21.guariti + " guariti" + "<br />");
document.writeln(g21.morti + " morti" + "<br />");
document.writeln(g21.totali + " totali" + "<br />");
document.writeln("<br />");
break;

case "22":
document.writeln("Bollettino del 22/03" + "<br />"); 
document.writeln(g22.positivi + " positivi" + "<br />");
document.writeln(g22.guariti + " guariti" + "<br />");
document.writeln(g22.morti + " morti" + "<br />");
document.writeln(g22.totali + " totali" + "<br />");
document.writeln("<br />");
break;

default:
document.writeln("Data non trovata o non disponibile");
}
