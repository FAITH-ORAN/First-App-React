import { React, Component } from "react";
import Mycars from './components/Mycars';//import du fichier que j'ai créé Mycars
import './App.css';
class App extends Component {//j'ai changé la fonction en class, par choix juste pour voir les states
  state={
    titre:"Mon catalogues voitures"
  }

  changeTitle =(e) => {
    this.setState({
      titre:"mon nouveau titre"
    })//premiere méthode pour changer le state de façon statique
  }

  changeViaParam =(titre) => {//deuxième méthode pour changer le state de façon statique mais avec un paramétre , jai passé le non titre à l'intérrier des mes param,
    this.setState({
      titre:titre
    })
  }

  changeViaBind =(param)=>{//troisème méthode pour changer le titre via la méthode bind
    this.setState({
      titre:param
    })
  }

  changeViaInput = (e)=>{
    this.setState({
      titre:e.target.value
    })
  }


  render(){
  return (
    <div className="App">
    <Mycars title={this.state.titre}/>
    <button onClick={this.changeTitle}>changer le nom en dur</button>
    <button onClick={() => this.changeViaParam("titre changé via param")}>changer le nom via param</button>
    <button onClick={this.changeViaBind.bind(this,'titre via bind')}>changer le nom via bind</button>
    <input type='text' onChange={this.changeViaInput} value={this.state.titre}></input>
    </div>
  );//j'ai importé la class Mycars à l'intérrieur il avait un h1 Hello React
};//pour faire fonctionner la méthode viaParam, il faut mettre une fonction autoinvoqué avant this
};//pour faire fonctionner la méthode viaBind, j'ai utilisé bind(this,"text ici") pour faire fonctionner la fonction

export default App;
