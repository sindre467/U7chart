
oversettTekst = () =>
 {
    for (var i = 0; i < skriveFelt.length; i++) {
        var lett = skriveFelt[i].toUpperCase();
        var x = tekstArray.indexOf(lett);
        oversettMorse += morseArray[x];
   
    }
 updateView();
}

 settInTekst = () => {
skriveFelt = document.getElementById('txtData').value; 
}