function trouverIntersection() {
    // Obtenez les tableaux
    let tableau1 = document.getElementById('table1');
    let tableau2 = document.getElementById('table2');

    // Obtenez les lignes des tableaux
    let lignesTableau1 = tableau1.getElementsByTagName('tr');
    let lignesTableau2 = tableau2.getElementsByTagName('tr');

    // Initialisez le tableau des résultats
    let resultats = [];

    // Parcourez les lignes des deux tableaux
    for (let i = 0; i < lignesTableau1.length; i++) {
        for (let j = 0; j < lignesTableau2.length; j++) {
        // Obtenez les cellules des deux lignes
        let cellulesTableau1 = lignesTableau1[i].getElementsByTagName('td');
        let cellulesTableau2 = lignesTableau2[j].getElementsByTagName('td');

        // Comparer les valeurs des cellules
        if (cellulesTableau1[0].innerText === cellulesTableau2[0].innerText) {
        resultats.push(cellulesTableau1[0].innerText);
        }
    }
    }

    // Affichez les résultats
    afficherResultat(resultats);
}

function afficherResultat(resultats) {
    let resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = '';

    if (resultats.length > 0) {
    let tableauResultat = document.createElement('table');
        let ligne = tableauResultat.insertRow();

      // Créez l'en-tête du tableau résultat
        let cellule = ligne.insertCell();
        cellule.innerHTML = '<b>Valeurs Intersection</b>';

      // Ajoutez les valeurs intersection dans le tableau résultat
        for (let i = 0; i < resultats.length; i++) {
        ligne = tableauResultat.insertRow();
        cellule = ligne.insertCell();
        cellule.innerHTML = resultats[i];
    }

        resultatDiv.appendChild(tableauResultat);
    } else {
        resultatDiv.innerHTML = 'Aucune valeur d\'intersection trouvée.';
    }
}
