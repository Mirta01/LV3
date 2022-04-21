function  KompleksniBroj(realniBroj, imaginarniBroj)
{
    this.realni = realniBroj;
    this.imaginarni = imaginarniBroj;
}

var  _kb = {
    ispisiKompleksniBroj: function (KompBr)
    {
        return "z = "+ KompBr.realni + " + " + KompBr.imaginarni + " i";
    },
    zbroji: function(KompBr1, KompBr2)
    {
        var x = 0;
        var y = 0;
        x = KompBr1.realni + KompBr2.realni;
        y = KompBr1.imaginarni +KompBr2.imaginarni;
        return "z = " + x + " + " + y + "i ";

    },
    pomnozi: function(KompBr1, KompBr2)
    {
        var z = 0;
        var y = 0;
        var x = 0;
        var o = 0;
        var r = 0;
        var rjesenje = 0;
        z = KompBr1.realni * KompBr2.realni;
        y = KompBr1.realni * KompBr2.imaginarni;
        x = KompBr2.realni * KompBr1.imaginarni;
        o = KompBr1.imaginarni * KompBr2.imaginarni;
        r = y + x;
        rjesenje = z-o;
        return "z = " + rjesenje + " + " + r + "i";
    }
}

var br1 = new KompleksniBroj(1, 3);
var br2 = new KompleksniBroj(3, 4);
var br3 = new KompleksniBroj(12, 54);
var br4 = new KompleksniBroj(7, 3);
var br5 = new KompleksniBroj(-9, 13);


function Rjesi()
{
    var Z1 = new KompleksniBroj(parseInt(document.getElementById("realniBr1").value), parseInt(document.getElementById("imaginarniBr1").value));
    var Z2 = new KompleksniBroj(parseInt(document.getElementById("realniBr2").value), parseInt(document.getElementById("imaginarniBr2").value));
    var ak = document.getElementById("akcija").value;
    if (ak == "Zbarajanje") {
        console.log(_kb.zbroji(Z1, Z2));
        document.getElementById("z3").innerText = _kb.zbroji(Z1, Z2)
    }
    else if (ak == "Mnozenje"){
        console.log(_kb.pomnozi(Z1, Z2));
        document.getElementById("z3").innerText = _kb.pomnozi(Z1, Z2)
    }
}
