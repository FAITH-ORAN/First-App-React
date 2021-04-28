// eslint-disable-next-line no-unused-vars
import React, {Component } from "react";
import Car from './Cars';//j'ai importé le composant que j'ai crée dans Cars.js

class Mycars extends React.Component {
    
    render() {
 
        return(
            <div>
                <h1>{this.props.title}</h1>
                <Car color="red">Ford</Car>
                <Car color="green"></Car>
                <Car color="">Opel</Car>
            </div>
        )//J'ai écrit le nom des voiture à l'intérieur des balises Car , mais il s'affiche pas car besoin de props de la fonction Car
    }//je peu x ajouter des propriété a car soit en children(exemple marque de voiture) soit en paramétre comme dans l'exemple de color
}


export default Mycars;//tjr j'export ma fonction pour pouvoir l'importer ailleur