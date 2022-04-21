function Printer(toner, dvostrano)
{
    if (toner < 0)
    {
        this.nivo_tonera = 0;
    }
    else if(toner > 100)
    {
        this.nivo_tonera = 100;
    }
    else
    {
        this.nivo_tonera = toner;
    }

    this.dvostranoIspisivanje = dvostrano;
    this.ukupanBrojStranica = 0;
}

Printer.prototype.dodajBoju = function()
{
    this.nivo_tonera=100;
    console.log("Toner je nadopunjen.");
}

Printer.prototype.printaj = function(brojStranica)
{
    var stranica=0;
    var stanjeTonera = brojStranica*0.1;
    if(this.nivo_tonera > stanjeTonera)
    {
        if (this.dvostranoIspisivanje == true) {
            this.nivo_tonera -= 0.2;
            if (brojStranica % 2 == 0) 
            {
                stranica = brojStranica/2;
                this.ukupanBrojStranica += stranica;
                console.log("Isprintano je " + stranica + " listova.");
            }
            else
            {
                stranica = (brojStranica - 1)/2;
                this.ukupanBrojStranica += (stranica + 1);
                console.log("Isprintano je " + (stranica + 1) + " listova.");
            }
        }
        else{
            this.nivo_tonera -= 0.1;
            this.ukupanBrojStranica += brojStranica;
            console.log("Isprintano je " + brojStranica + " listova.");
        }
    }
    else
    {
        console.log("Printer je ostao bez tonera, molimo nadopunite ga.");
    }
}

Printer.prototype.stanjeTonera = function()
{
    console.log(this.nivo_tonera);
}

Printer.prototype.sumaIsprintanihStranica = function()
{
    console.log(this.ukupanBrojStranica);
}

var Samsung_M283x = new Printer(50, true);
var Epson_Sx105 = new Printer(20, false);
var Cannon_Pixma = new Printer(1, false);
var HP_Smart_tank_500 = new Printer(80, true);

HP_Smart_tank_500.printaj(9);  //5 listova
HP_Smart_tank_500.printaj(10); //5 listova

Cannon_Pixma.printaj(11); //nema dovoljno tonera

Cannon_Pixma.dodajBoju(); //boja nadopunjena

Cannon_Pixma.stanjeTonera(); // 100