'use strict';

var View1Ctrl = function($scope, $routeParams, NewsRest) {
    
    $scope.searchKey = $routeParams.key;
    
    //$scope.news = [
    //    {
    //        title: 'Ritrovata la scatola nera dell’Airbus, ma è danneggiata',
    //        description: 'Il giorno dopo la strage aerea sulle alpi francesi che ha causato la morte di 150 persone continua il lavoro delle squadre di soccorso sul massiccio dei Trois-Eveches, in Alta Provenza. Intanto con il ritrovamento della scatola nera è iniziato il lavoro degli inquirenti per cercare di capire le cause dell’incidente. Il congegno che era a bordo è danneggiato, ma secondo il governo francese «potrà dare informazioni utili». In attesa di capire cosa ha provocato lo schianto diversi equipaggi della Germanwings si sono rifiutati di partire causando la cancellazione di almeno 30 voli della compagnia. Al campo base di Syene-Les-Alpes oggi sono attesi Hollande, Merkel e Rajoy.',
    //        timestamp: '1426848122'
    //    },
    //    {
    //        title: 'Reclutavano aspiranti jihadisti per l’Isis: 3 arresti',
    //        description: 'Due arresti e quattro perquisizioni a Torino e in Val di Lanzo nell’ambito di un’indagine della procura di Brescia e della Digos contro possibili sostenitori dell’Isis in Italia. Nessuno dei quattro uomini di origine nordafricana avrebbe combattuto in Siria o in altri fronti in cui sono presenti le milizie del Califfato. Si tratterebbe di fiancheggiatori, persone che, attraverso il web, sarebbero stati in contatto, web e telefonico, con combattenti partiti dall’Italia ma non solo, in particolare con Anas El Abboudi, partito dal Nord Est per la Siria tempo addietro. Poi la triangolazione con l’Albania, dove è avvenuto il terzo arresto.',
    //        timestamp: '1420878122'
    //    },
    //    {
    //        title: 'Maduro attacca l’ex premier spagnolo Gonzalez “Mercenario che difende i golpisti del Venezuela”',
    //        description: 'È bastata la promessa di un bello stipendio in euro, e ha aderito subito alla campagna dei golpisti»: l’accoglienza riservata all’ex presidente spagnolo Felipe Gonzalez, che appena assunto la difesa dei due principali prigionieri politici venezuelani, è stata calda, certo, ma non del tutto affettuosa. Il presidente Nicolas Maduro ha infatti mostrato tutto il suo sdegno per l’iniziativa di un uomo che come lui vede la scritta «socialista» nella tessera del partito a cui appartiene, ma che declina anche il termine «democrazia» in modo totalmente diverso, «tanto - ha ricordato lo stesso capo di Stato - che nel 2005 o nel 2006, fu cacciato dal palazzo di Miraflores di Caracas nientemeno che dal comandante Hugo Chavez, perché era venuto a proporre degli affari sporchi.',
    //        timestamp: '1413838122'
    //    }
    //];
    $scope.news = [];
    
    NewsRest.getNews().
        success(function(data, status, headers, config) {
          $scope.news = data;
        }).
        error(function(data, status, headers, config) {
          $scope.news = null;
        });
};

angular.module('myApp.view1')
    .controller('View1Ctrl', ['$scope', '$routeParams', 'NewsRest', View1Ctrl]);