    //croisement des deux api
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
    newURL=decodeURIComponent(newURL)
    var startcountry= newURL.indexOf("?id =")+"?id =".length
    var endcountry = newURL.indexOf("&& idE=")
    var begincap = newURL.indexOf("&& idE=")+"&& idE=".length
    var endcap = newURL.indexOf(">Metéo")
    var paystest = newURL.substr(startcountry,endcountry-startcountry)
    var villetest = newURL.substr(begincap,endcap-begincap)
    var result
    var pays = paystest
    var ville = villetest
    //affichage de quelques informations de la ville selectionnée
    fetch('https://restcountries.eu/rest/v2/capital/'+ville+'').then(
    function(response){
    response.json().then(function(donne){
        information = donne
        console.log(information)
        var ville = document.getElementById("ville")
        vill = ""
        vill = vill + " " + information[0].capital
        ville.innerHTML = vill
        ville.style.textAlign="center";
        var infos = document.getElementById("infos")
         concatenation = ""
         concatenation = "<br>"
         concatenation = concatenation+ "<h1>Description de la ville</h1></br>"
         concatenation = concatenation + "<p><span> " + information[0].capital + "</span> c'est la capital de <span> " + information[0].name + "</span></p><p> "
         concatenation = concatenation + "Elle a une superficie de <span>" + information[0].area + " kilomètre carés </span> et une population de <span> " + information[0].population + "hbt </span></p><p>"
         concatenation = concatenation + "dont la langue nionnalle est <span> " + information[0].languages[0].name + "</span> et la langue native est  " + information[0].languages[0].nativeName + " "
         concatenation = concatenation + ".</p><p><span>" + information[0].currencies[0].name + "</span> est la monaie consomée dans le pays dont le symbole est <span> " + information[0].currencies[0].symbol + "</span>.</p>"
        infos.innerHTML = concatenation
        }) 
    })
    //affichage des information de la metéo
    var result
    fetch('http://api.wunderground.com/api/50a65432f17cf542/conditions/q/'+pays+'/'+ville+'.json').then(
    function(response){
    response.json().then(function(donne){
        meteo = donne
        console.log(meteo)
        var meteo = donne;
        var weather = meteo.current_observation.temp_c;
        var humidite = meteo.current_observation.relative_humidity;
        var image = meteo.current_observation.icon_url;
        var heure = meteo.current_observation.local_time_rfc822;
        var div = document.createElement("div");
        div.innerHTML = "<p>Nous sommes le <span>"+ heure +"</span>, La temperature actuelle dans la ville de <span> "+ ville +"</span> est <span>" + weather + "°C </span> et l'humidité est de <span>" + humidite + "</span></p>";
        var divImage = document.createElement("img");
        divImage.src = image;
        var divMeteo = document.getElementById("meteo");
        divMeteo.appendChild(div);
        divMeteo.appendChild(divImage);
        divMeteo.style.textAlign="center"; 
        })   
    })