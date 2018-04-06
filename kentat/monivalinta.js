function randomoiVastaukset(vastaus1,vastaus2,vastaus3) {
	
  var luku = Math.floor((Math.random() * 6) + 1);
  var vastaustaulukko = new Array();
  
  if (luku == 1)
  {
	 vastaustaulukko[0] = vastaus1;
	 vastaustaulukko[1] = vastaus2;
	 vastaustaulukko[2] = vastaus3;
  }
  if (luku == 2)
  {
	 vastaustaulukko[1] = vastaus1;
	 vastaustaulukko[2] = vastaus2;
	 vastaustaulukko[0] = vastaus3;
  }
    if (luku == 3)
  {
	 vastaustaulukko[2] = vastaus1;
	 vastaustaulukko[1] = vastaus2;
	 vastaustaulukko[0] = vastaus3;
  }
    if (luku == 4)
  {
	 vastaustaulukko[0] = vastaus1;
	 vastaustaulukko[2] = vastaus2;
	 vastaustaulukko[1] = vastaus3;
  }
    if (luku == 5)
  {
	 vastaustaulukko[1] = vastaus1;
	 vastaustaulukko[0] = vastaus2;
	 vastaustaulukko[2] = vastaus3;
  }
    if (luku == 6)
  {
	 vastaustaulukko[2] = vastaus1;
	 vastaustaulukko[0] = vastaus2;
	 vastaustaulukko[1] = vastaus3;
  }
  
	return vastaustaulukko;

  
}

var pisteet;
var laskuri;

function naytaKysymys()  {
	
	
if (localStorage.getItem('laskuri') == null || localStorage.getItem('laskuri') == 0)
{
	console.log('Laskuri: tyhjä');
	localStorage.setItem('laskuri',0);
	
}

else
{
	console.log('laskuri' + localStorage.getItem('laskuri'));
}

if (localStorage.getItem('pisteet') == null || localStorage.getItem('pisteet') == 0)
{
	console.log('Pisteet: tyhja');
	localStorage.setItem('pisteet',0);
}

else
{
	console.log('pisteita' + localStorage.getItem('pisteet'));
}
pisteet = localStorage.getItem('pisteet');
laskuri = localStorage.getItem('laskuri');

 console.log('ajo');
 //luodaan näyttöä varten yhden kysymyksen html-rakenne
 var naytto = document.createElement("div");
 var kentta = document.createElement("section");
 var otsikko = document.createElement("h1");
 var vastaus1 = document.createElement("div");
 var vastaus2 = document.createElement("div");
 var vastaus3 = document.createElement("div");
 
 vastaus1.setAttribute("id","vastaus1");
 vastaus2.setAttribute("id","vastaus2");
 vastaus3.setAttribute("id","vastaus3");
  
  
 //kysymysjärjestyksen randomisointi 
 var luvut = satunnaisLuvut();
 
 console.log(luvut);
 
 var kysymys = kysymysData(luvut[laskuri]);
  
 //sijoitetaan kysymyksen sisältö html-rakenteeseen, kysymysnumero satunnainen 
  otsikko.innerHTML = kysymys[0];
  vastaus1.innerHTML = kysymys[1];
  vastaus2.innerHTML = kysymys[2];
  vastaus3.innerHTML = kysymys[3];
 
 //vastausjärjestyksen randomisointi
 vastaustaulukko = randomoiVastaukset(vastaus1,vastaus2,vastaus3);
 
 //lisätään lapsielementit
 kentta.appendChild(otsikko);
 kentta.appendChild(vastaustaulukko[0]);
 kentta.appendChild(vastaustaulukko[1]);
 kentta.appendChild(vastaustaulukko[2]);

 
 naytto.appendChild(kentta);
 
 //vastaus1.onclick = function() {vastaus('vastaus1')};
 //vastaus2.onclick = function() {vastaus('vastaus2')};
 //vastaus3.onclick = function() {vastaus('vastaus3')};
 
 
 document.getElementById("kysymysHolder").innerHTML = naytto.innerHTML;
 
 document.getElementById("vastaus1").addEventListener("click",function() {vastaus('vastaus1')});
 document.getElementById("vastaus2").addEventListener("click",function() {vastaus('vastaus2')});
 document.getElementById("vastaus3").addEventListener("click",function() {vastaus('vastaus3')});
 
 if (laskuri == 9)
 {
	 alert('You got ' + pisteet + '/10 points');
	 localStorage.setItem('pisteet',0);
	 localStorage.setItem('laskuri',0);
 }
  
  
 
 }
 
 function vastaus(vaihtoehto)
 { 
	var oikea = 'vastaus3';
	
	if (vaihtoehto == oikea)
	{
		pisteet++;
		localStorage.setItem('pisteet',pisteet);
		laskuri++;
		localStorage.setItem('laskuri',laskuri);
		naytaKysymys();
	}
	
	else
	{   laskuri++;
		localStorage.setItem('laskuri', laskuri);
		naytaKysymys();
	}
	 
	 
 }
 
 function kysymysData(luku)
 {
		var kysymystaulukko = new Array();
		//lisätään kaikki kysymykset taulukkoon
	kysymystaulukko[0] = document.getElementById("s0");
	kysymystaulukko[1] = document.getElementById("s1");
	kysymystaulukko[2] = document.getElementById("s2");
	kysymystaulukko[3] = document.getElementById("s3");
	kysymystaulukko[4] = document.getElementById("s4");
	kysymystaulukko[5] = document.getElementById("s5");
	kysymystaulukko[6] = document.getElementById("s6");
	kysymystaulukko[7] = document.getElementById("s7");
	kysymystaulukko[8] = document.getElementById("s8");
	kysymystaulukko[9] = document.getElementById("s9");

	console.log(luku);
	var otsikko = kysymystaulukko[luku].childNodes[1].innerHTML;
	var vastaus1 = kysymystaulukko[luku].childNodes[3].innerHTML;
	var vastaus2 = kysymystaulukko[luku].childNodes[5].innerHTML;
	var vastaus3 = kysymystaulukko[luku].childNodes[7].innerHTML;
	
	var kysymys = [otsikko,vastaus1,vastaus2,vastaus3];
	
	return kysymys;
 }
 
 function satunnaisLuvut()
 {
	 var taulukko = [0,1,2,3,4,5,6,7,8,9];
	 var tulostaulukko = [];
	 
	 for (var i = 0; i < 10; i++)
	 {
		 var max = taulukko.length -1;
		 var min = 0;
		 var index = Math.floor(Math.random() * (max - min + 1)) + min;
		 tulostaulukko.push(taulukko[index]);
		 taulukko.splice(index, 1);
	 }
	
	 return tulostaulukko;
	 
 }