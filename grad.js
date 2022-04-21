function Grad(Naziv_grada, Broj_stanovnika, Latituda, Longituda)
{
    this.naziv = Naziv_grada;
    this.populacija = Broj_stanovnika;
    this.latituda = Latituda;
    this.longituda = Longituda;
}

function dajUdaljenost(grad1, grad2)
{
    const R = 6371;
    const φ1 = grad1.latituda * Math.PI/180;
    const φ2 = grad2.latituda * Math.PI/180;
    const Δφ = (grad2.latituda - grad1.latituda) * Math.PI/180;
    const Δλ = (grad2.longituda - grad1.longituda) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // in km
    return d;
}

var oVirovitica = new Grad("Virovitica", "21291" , "45.8316", "17.3855");
var oSlatina = new Grad("Slatina", "13686" , "45.70333", "17.70278");
var oBjelovar = new Grad("Bjelovar", "40276" , "45.89861", "16.84889");
var oOsijek = new Grad("Osijek", "108048" , "45.554962", "18.695514");
var oZagreb = new Grad("Zagreb", "806341" , "45.815399", "15.966568");

Grad.prototype.dajVelicinuGrada = function()
{
    if (this.populacija<30000) { return 1; }
    if (this.populacija>30000 && this.populacija<200000) { return 2; }
    if (this.populacija>200000) { return 3; }
}

console.log(oZagreb.dajVelicinuGrada());

console.log(dajUdaljenost(oOsijek, oVirovitica));