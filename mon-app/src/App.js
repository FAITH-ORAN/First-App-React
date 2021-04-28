import { React, Component } from "react";
import Mycars from './components/Mycars';//import du fichier que j'ai créé Mycars
import './App.css';
class App extends Component {//j'ai changé la fonction en class, par choix juste pour voir les states
  state={
    titre:"Mon catalogues voitures"
  }
  render(){
  return (
    <div className="App">
    <Mycars title={this.state.titre}/>
    </div>
  );//j'ai importé la class Mycars à l'intérrieur il avait un h1 Hello React
};
};

export default App;
