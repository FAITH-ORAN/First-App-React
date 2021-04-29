// eslint-disable-next-line no-unused-vars
import React, {Component } from "react";
import Car from './Cars';//j'ai importé le composant que j'ai crée dans Cars.js

class Mycars extends React.Component {

    noCopy=()=>{//je crée une fonction fléchée qui affiche une alert pour ne pas copier 
      alert("merci de ne pas copier le texte");
    }
    

    
    render() {
 
        return(
            <div>
                <h1>{this.props.title}</h1>
                 
                <p onCopy={this.noCopy}>Bonjour je suis votre conseiller</p>
                <Car color="red">Ford</Car>
                <Car color="green"></Car>
                <Car color="">Opel</Car>
            </div>
        )//J'ai écrit le nom des voiture à l'intérieur des balises Car , mais il s'affiche pas car besoin de props de la fonction Car
    }//je peu x ajouter des propriété a car soit en children(exemple marque de voiture) soit en paramétre comme dans l'exemple de color
}//j'ai rajouté l'évenement onCopy sur mon p, pour empecher la copie , pour écrire du Js dans le jsx j'utilise les acollades{},je mets toujour this., 


export default Mycars;//tjr j'export ma fonction pour pouvoir l'importer ailleur