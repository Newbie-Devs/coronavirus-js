function giorno(positivi, guariti, morti, totali) 
{
this.positivi = positivi;
this.guariti = guariti;
this.morti = morti;
this.totali = totali;
}
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
document.writeln("Data non trovata");
}
