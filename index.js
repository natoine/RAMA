
//chargement de notre API qui contient les pays de l'europe
     var result
    fetch('https://restcountries.eu/rest/v2/region/europe').then(
    function(response){
    response.json().then(function(donne){
        result = donne
        var contenu = document.getElementById("contenu")
        concatenation = ""
        concatenation = concatenation + "<table class='table' > "
        concatenation = concatenation + "<thead style ='color:red'> "
        concatenation = concatenation + "<tr> "
        concatenation = concatenation + "<td>"
        concatenation = concatenation + "Pays"
        concatenation = concatenation + "</td>"
        concatenation = concatenation + "<td>"
        concatenation = concatenation + "Capital"
        concatenation = concatenation + "</td>"
        concatenation = concatenation + "<td>"
        concatenation = concatenation + "Détails Metéo"
        concatenation = concatenation + "</td>"
        concatenation = concatenation + "<td>"
        concatenation = concatenation + "Population de la capital"
        concatenation = concatenation + "</td>"
        concatenation = concatenation + "<td>"
        concatenation = concatenation + "Zone Géographique"
        concatenation = concatenation + "</td>"
        concatenation = concatenation + "</tr>"
        concatenation = concatenation + "</thead> "
        concatenation = concatenation + "<tbody style ='color:green'> "
        //affichages des données de notre API
        for (i=0;i< result.length; i++)
        {


            concatenation = concatenation + "<tr> " 
            concatenation = concatenation + "<td> " 
            concatenation = concatenation + " " + result[i].name + " "
            concatenation = concatenation + "</td> " 
            concatenation = concatenation + "<td> " 
            concatenation = concatenation + " " + result[i].capital
            concatenation = concatenation + "</td> " 
            concatenation = concatenation + "<td> " 
            concatenation = concatenation +'<a href="information.html?id ='+result[i].name+' && idE='+result[i].capital+'>Metéo</a>'
            concatenation = concatenation + "</td> " 
            concatenation = concatenation + "<td> " 
            concatenation = concatenation + " " + result[i].population
            concatenation = concatenation + "</td> " 
            concatenation = concatenation + "<td> " 
            concatenation = concatenation + " " + result[i].subregion
            concatenation = concatenation + "</td> " 
            concatenation = concatenation + "</tr> "
        }
        concatenation = concatenation + "</tbody> "
        concatenation = concatenation + "</table> "
        contenu.innerHTML = concatenation

        })  
    })