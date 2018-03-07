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
function naytaKysymys()  {

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
 kysymystaulukko[10] = document.getElementById("s10");
 
 //luodaan näyttöä varten yhden kysymyksen html-rakenne
 var naytto = document.createElement("body");
 var kentta = document.createElement("section");
 var otsikko = document.createElement("h1");
 var vastaus1 = document.createElement("div");
 var vastaus2 = document.createElement("div");
 var vastaus3 = document.createElement("div");
  
 //kysymysjärjestyksen randomisointi 
 var luku = Math.floor((Math.random() * 9) + 1);
  
 //sijoitetaan kysymyksen sisältö html-rakenteeseen, kysymysnumero satunnainen 
  otsikko.innerHTML = kysymystaulukko[luku].childNodes[1].innerHTML;
  vastaus1.innerHTML = kysymystaulukko[luku].childNodes[3].innerHTML;
  vastaus2.innerHTML = kysymystaulukko[luku].childNodes[5].innerHTML;
  vastaus3.innerHTML = kysymystaulukko[luku].childNodes[7].innerHTML;
 
 //vastausjärjestyksen randomisointi
 vastaustaulukko = randomoiVastaukset(vastaus1,vastaus2,vastaus3);
 
 //lisätään lapsielementit
 kentta.appendChild(otsikko);
 kentta.appendChild(vastaustaulukko[0]);
 kentta.appendChild(vastaustaulukko[1]);
 kentta.appendChild(vastaustaulukko[2]);
 
 //lisätään kentta-näkymä html body-tagiin
 naytto.appendChild(kentta);
 
 var pisteet = 0;
 var kierros = 0;
 vastaus1.onclick = function() {location.reload()};
 vastaus2.onclick = function() {location.reload()};
 vastaus3.onclick = function() {location.reload()};
 
 
 document.body = naytto;

 
 }
 