import { Injectable } from '@angular/core';
import { formateur } from '../admin/model/formateur';
import { formation } from '../admin/model/formation';
import { session } from '../admin/model/session';
import { sessionFormateur } from '../admin/model/session-formateur';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  createdatabase(){

    const tabAmdin={userName:"user-admin", password:"admin-2019"};


     var db;
     var request = window.indexedDB.open("myDB");

     request.onerror = function(event) {
       console.log("erreur dans la creation de base?!");
     };

     request.onsuccess = function(event) {
       db = event.target.result;
       //console.log(db);

     };
      request.onupgradeneeded = function(event) {
      let db = event.target.result;

      //creation de db pour admin
      var objectStoreadmin = db.createObjectStore("admin",{autoIncrement : true });
      //creation de champs pour admin
          objectStoreadmin.createIndex("userName","userName",{unique : false})
          objectStoreadmin.createIndex("password","password",{unique : false})
      //add compte admin
      objectStoreadmin.add({userName:tabAmdin.userName, password:tabAmdin.password});

      //creation de db pour condidat
      var CandidatStore = db.createObjectStore("candidat", {autoIncrement : true  });

        CandidatStore.createIndex("numcin", "numcin", { unique: true });
        CandidatStore.createIndex("nom", "nom", { unique: false });
        CandidatStore.createIndex("prenom", "prenom", { unique: false });
        CandidatStore.createIndex("email", "email", { unique: false });
        CandidatStore.createIndex("photo", "photo", { unique: false });
        CandidatStore.createIndex("cv", "cv", { unique: false });
        CandidatStore.createIndex("mdp", "mdp", { unique: false });

      //creation de db pour Formateur
      var FormateurStore = db.createObjectStore("formateur", {autoIncrement : true  });

        FormateurStore.createIndex("numcin", "numcin", { unique: true });
        FormateurStore.createIndex("nom", "nom", { unique: false });
        FormateurStore.createIndex("prenom", "prenom", { unique:false });
        FormateurStore.createIndex("email", "email", { unique: false });
        FormateurStore.createIndex("numtlf", "numtlf", { unique: false });
        FormateurStore.createIndex("tarifhorraire", "tarifhorraire", { unique: false });
        FormateurStore.createIndex("photo", "photo", { unique: false });
        FormateurStore.createIndex("mpd", "mpd", { unique: false });
        FormateurStore.createIndex("cv", "cv", { unique: false });
        FormateurStore.createIndex("specialite", "specialite", { unique: false });

      //creation de db pour session
      var SessionStore = db.createObjectStore("session",{ keyPath: 'idSession', autoIncrement: true });
        SessionStore.createIndex("nom","nom",{unique : false})
        SessionStore.createIndex("date_debut","date_debut",{unique : false})
        SessionStore.createIndex("date_fin","date_fin",{unique : false})
        SessionStore.createIndex("plannig","plannig",{unique : false})

      //creation de db pour sessionFormateur
      var SessionFormateurStore = db.createObjectStore("session_formateur",{ keyPath: 'idSessionFormateur', autoIncrement: true });
        SessionFormateurStore.createIndex("cin_formateur","cin_formateur",{unique : false})
      SessionFormateurStore.createIndex("nom_formateur","nom_formateur",{unique : false})
        SessionFormateurStore.createIndex("id_session","id_session",{unique : false})
        SessionFormateurStore.createIndex("nom_session","nom_session",{unique : false})

      //creation de db pour Formation
      var formationStore = db.createObjectStore("formation",{keyPath: 'idFormation',autoIncrement: true });

        formationStore.createIndex("titre", "titre", { unique: false });
        formationStore.createIndex("description", "description", { unique: false });
        formationStore.createIndex("chargehorraire", "chargehorraire", { unique: false });
        formationStore.createIndex("programme", "programme", { unique: false });
        formationStore.createIndex("niveau", "niveau", { unique: false });
        formationStore.createIndex("tags", "tags", { unique: false });
    };
  };


  verifyAdmin(userName, password){
  let request = window.indexedDB.open("myDB")

  request.onerror = function(event) {
     console.log("erreur dans l'ouverture de base");
  };

  request.onsuccess = function(event) {
     const db =event.target.result;

     //console.log("success d'ouverture de base");

    var transaction = db.transaction(["admin"]);
    var objectStore = transaction.objectStore("admin");

    var index = objectStore.index("userName");

    index.get(userName).onsuccess = function(eventMail) {
      if(eventMail.target.result == undefined){
        alert("email non valid")
      }else{
        var indexpassword=objectStore.index("password")
          indexpassword.get(password).onsuccess=function(eventPassword){
            if(eventPassword.target.result == undefined){
              alert("Password non valid")
            }
            sessionStorage.setItem("adminConnect","active")
          };
      }
    };

  };

  }

  addFormation(tableFormation){

    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

    //console.log("test succes "+ bdd);

      var request = bdd.transaction(["formation"],"readwrite").objectStore("formation");

      for (var i in tableFormation){
        request.add({
          "titre":tableFormation[i].titre,
          "description":tableFormation[i].description,
          "chargehorraire":tableFormation[i].chargehorraire,
          "programme":tableFormation[i].programme,
          "niveau":tableFormation[i].niveau,
          "tags":tableFormation[i].tags
        });
      }
    };
  }

  addFormateur(tableFormateur){

    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

    //console.log("test succes "+ bdd);

      var request = bdd.transaction(["formateur"],"readwrite").objectStore("formateur")

      for ( var i in tableFormateur){
        request.add({
          "numcin":tableFormateur[i].numcin,
          "nom":tableFormateur[i].nom,
          "prenom":tableFormateur[i].prenom,
          "email":tableFormateur[i].email,
          "mpd":tableFormateur[i].mdp,
          "cv":tableFormateur[i].cv,
          "specialite":tableFormateur[i].specialite,
          "tarifhorraire":tableFormateur[i].tarifhorraire,
          "numtlf":tableFormateur[i].numtlf,
          "photo":tableFormateur[i].photo
        });
      }


    }
  }

  addSession(addItem) {
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

      var request = bdd.transaction(["session"], "readwrite").objectStore("session")
      for (var i in addItem){
        request.add({
          "nom":addItem[i].nom,
          "date_debut":addItem[i].date_debut,
          "date_fin":addItem[i].date_fin,
          "plannig":addItem[i].plannig
        });
      }
    };
  }

  getSessions() {
    var allItems=[];
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

    var objectStore = bdd.transaction(["session"]).objectStore(["session"]);

    /*Un autre moyen de parcourir un store est les curseurs
    Pas besoin d’une boucle avec les curseurs : que des appels
    recursifs*/

      objectStore.openCursor().onsuccess = function(event) {
        var curseur = event.target.result;
        if (curseur) {
          allItems.push(
            new session(
              curseur.value.idSession,
              curseur.value.nom,
              curseur.value.date_debut,
              curseur.value.date_fin,
              curseur.value.plannig
            )
          )
          //Chaque appel reussi de ´ curseur.continue() donne lieu a un ` ev´ enement ´”succes”, ce qui d ` eclenchera l’ex ´ ecution de la m ´ ethode ´ onsuccess.
          curseur.continue();
        }
        else {
          console.log("fin des enregistrements de sessions!");
        }
      };
    };
  return allItems
  }

  listesformateurs() {
    const allItems=[];
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

    var objectStore = bdd.transaction("formateur").objectStore("formateur");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          allItems.push(
            new formateur(
              cursor.key,
              cursor.value.numcin,
              cursor.value.nom,
              cursor.value.prenom,
              cursor.value.email,
              cursor.value.mpd,
              cursor.value.cv,
              cursor.value.specialite,
              cursor.value.tarifhorraire,
              cursor.value.numtlf,
              cursor.value.photo,
            )
          )
          cursor.continue();
        }
        else {
          console.log("fin des enregistrements de formateurs!");
        }
      };
    };
    return allItems
  }

  addSession_formateur(tab) {
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;
    var request = bdd.transaction(["session_formateur"], "readwrite").objectStore("session_formateur")
      for (var i in tab){
        request.add({
          "cin_formateur":tab[i].cin_formateur,
          "nom_formateur":tab[i].nom_formateur,
          "id_session":tab[i].id_session,
          "nom_session":tab[i].nom_session
        })
      }
    }
  }

  listeFormation() {
    const allItem=[];
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;
    var objectStore = bdd.transaction(["formation"]).objectStore(["formation"]);

      objectStore.openCursor().onsuccess = function(event) {


        var cursor =this.result;
        if (cursor) {
          allItem.push(
            new formation(
              cursor.value.idFormation,
              cursor.value.titre,
              cursor.value.description,
              cursor.value.chargehorraire,
              cursor.value.programme,
              cursor.value.niveau,
              cursor.value.tags
            )
          )
          cursor.continue();
        }
        else {
          console.log("fin des enregistrements de formation ! ");
        }
      };
    };
    return allItem
  }

  getSearchFormation(search){
    let formationItem=[]
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
      var bdd = event.target.result;

      var transaction =bdd.transaction(["formation"]);
      var objectStore = transaction.objectStore("formation");

      var index = objectStore.index("tags");
      index.get(search).onsuccess = function(event) {
        //console.log(this.result)
        formationItem.push(new formation(
          this.result.idFormation,
          this.result.titre,
          this.result.description,
          this.result.chargehorraire,
          this.result.programme,
          this.result.niveau,
          this.result.tags
        ));
      };
    };
    return formationItem;
  }

  getFormation(id){
    const itemFormation = [];
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

    //console.log("test succes "+ bdd);

      var request = bdd.transaction("formation").objectStore("formation");

      request.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          if(id == cursor.value.idFormation){
            itemFormation.push(
              new formation(
                cursor.value.idFormation,
                cursor.value.titre,
                cursor.value.description,
                cursor.value.chargehorraire,
                cursor.value.programme,
                cursor.value.niveau,
                cursor.value.tags
              )
            )
          }
          cursor.continue();
        }
      };
    };
    return itemFormation;
  }

  verifyFormateur(cin, password){
    let request = window.indexedDB.open("myDB")

    request.onerror = function(event) {
       console.log("erreur dans l'ouverture de base");
    };

    request.onsuccess = function(event) {
       const db =event.target.result;

       //console.log("success d'ouverture de base");

      var transaction = db.transaction(["formateur"]);
      var objectStore = transaction.objectStore("formateur");

      var index = objectStore.index("numcin");

      index.get(cin).onsuccess = function(eventMail) {
        if(eventMail.target.result == undefined){
          alert("Cin non valid")
        }else{
          var indexpassword=objectStore.index("mpd")
            indexpassword.get(password).onsuccess=function(eventPassword){
              if(eventPassword.target.result == undefined){
                alert("Password non valid")
              }
              sessionStorage.setItem("formateurConnect","active")
              sessionStorage.setItem("formateurCin",cin)
              console.log(
                sessionStorage.getItem("formateurCin"))

            };
        }
      };
    };
  }

  getSessionFormateur() {
    var allItems=[];
    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

    var objectStore = bdd.transaction(["session_formateur"]).objectStore(["session_formateur"]);
      objectStore.openCursor().onsuccess = function(event) {
        var curseur = event.target.result;
        if (curseur) {
          if(sessionStorage.getItem("formateurCin") == curseur.value.cin_formateur){
            allItems.push(
              new sessionFormateur(
                curseur.value.cin_formateur,
                curseur.value.nom_formateur,
                curseur.value.id_session,
                curseur.value.nom_session
              )
            )
          }
          curseur.continue();
        }else {
          console.log("fin des enregistrements de sessions!");
        }
        //console.log(curseur)
      };
    };
    console.log(allItems)
    return allItems
  }

  addCondidat(tableCondidat){

    var request = window.indexedDB.open("myDB");

    request.onerror = function(event) {
      console.log("erreur dans base de donn !!");
    };

    request.onsuccess = function(event) {
    var bdd = event.target.result;

      var request = bdd.transaction(["candidat"],"readwrite").objectStore("candidat")

      for ( var i in tableCondidat){
        request.add({
          "numcin":tableCondidat[i].numcin,
          "nom":tableCondidat[i].nom,
          "prenom":tableCondidat[i].prenom,
          "email":tableCondidat[i].email,
          "mdp":tableCondidat[i].mdp,
          "cv":tableCondidat[i].cv,
          "photo":tableCondidat[i].photo
        });
      }


    }
  }

  verifyCandidat(email,mpd){

    let request = window.indexedDB.open("myDB")

    request.onerror = function(event) {
       console.log("erreur dans l'ouverture de base");
    };

    request.onsuccess = function(event) {
       const db =event.target.result;

       //console.log("success d'ouverture de base");

      var transaction = db.transaction(["candidat"]);
      var objectStore = transaction.objectStore("candidat");

      var index = objectStore.index("email");

      index.get(email).onsuccess = function(eventMail) {
        if(eventMail.target.result == undefined){
          alert("Email non valid")
        }else{
          var indexpassword=objectStore.index("mdp")
            indexpassword.get(mpd).onsuccess=function(eventPassword){
              if(eventPassword.target.result == undefined){
                alert("Password non valid")
              }
              sessionStorage.setItem("condidatConnect","active")
              sessionStorage.setItem("CondidatEmail",email)
            };
        }
      };
    };
  }
}
