import React, { Component } from "react";
import react from "./styles.css";

import lolaAdot from "./img/lolaAdot.jpg";
import rexAdot from "./img/rexAdot.jpg";
import penelopeAdot from "./img/penelopeAdot.jpg";
import catrinaAdot from "./img/catrinaAdot.jpg";
import donateloAdot from "./img/donateloAdot.png";
import bryanAdot from "./img/bryanAdot.jpg";
import divinaAdot from "./img/divinaAdot.jpg";
import brutosAdot from "./img/brutosAdot.jpg";
import pataAdot from "./img/pataAdot.png";

export default class AdotePet extends Component {
  state = {
    dogsPipoca: [
      {
        name: "Lola",
        age: "3 meses",
        quality: "Alegre",
        image: <img class="lola1" src={lolaAdot} alt="doglola" />
      },
      {
        name: "Rex",
        age: "1 ano",
        quality: "Brincalhão",
        image: <img class="rex2" src={rexAdot} alt="dogrex" />
      },
      {
        name: "Penelope",
        age: "8 meses",
        quality: "Charmosa",
        image: <img class="penelope3" src={penelopeAdot} alt="dogpenelope" />
      },
      {
        name: "Donatelo",
        age: "1 ano e 6 meses",
        quality: "Calmo",
        image: <img class="donatelo4" src={donateloAdot} alt="dogdonatelo" />
      }
    ],
    dogsCamarote: [
      {
        name: "Catrina",
        age: "11 meses",
        quality: "Amorosa",
        image: <img class="catrina5" src={catrinaAdot} alt="dogcatrina" />
      },
      {
        name: "Bryan",
        age: "2 anos",
        quality: "Fofinho",
        image: <img class="bryan6" src={bryanAdot} alt="dogbryan" />
      },
      {
        name: "Divina",
        age: "3 anos",
        quality: "Dócil",
        image: <img class="divina7" src={divinaAdot} alt="dogdivina" />
      },
      {
        name: "Brutos",
        age: "4 meses",
        quality: "Medroso",
        image: <img class="brutos8" src={brutosAdot} alt="dogbrutos" />
      }
    ],
    list: [],
    clear: []
  };

  listPipoca = () => {
    this.setState({
      list: this.state.dogsPipoca.map((item) => (
        <div>
          <ul>
            <li>Nome: {item.name}</li>
            <li>Idade: {item.age}</li>
            <li>Destaque: {item.quality}</li>
          </ul>
          <div>{item.image}</div>
        </div>
      ))
    });
  };

  listCamarote = () => {
    this.setState({
      list: this.state.dogsCamarote.map((item) => (
        <div>
          <ul>
            <li>Nome: {item.name}</li>
            <li>Idade: {item.age}</li>
            <li>Destaque: {item.quality}</li>
          </ul>
          <div>{item.image}</div>
        </div>
      ))
    });
  };

  clear = () => {
    this.setState({
      list: this.state.clear.map((item) => <div>{item.list}</div>)
    });
  };

  render() {
    return (
      <div>
        <h4>Big Fone: (21) 99414-2377</h4>
        <h1>Big Dog Brasil</h1>

        <img class="pata" src={pataAdot} alt="dogPatas" />

        <h3>Um “BDB” em que todos os participantes merecem uma linda casa.</h3>

        <section>
          <h2>Pipoca</h2>
          <p>
            No pipoca temos participantes com as seguintes qualidades: alegre,
            brincalhão, chramosa e calmo.
          </p>
          <p> Basta clicar e escolher quem será o campeão na sua casa.</p>
          <button onClick={this.listPipoca}>Dogs Pipoca</button>
        </section>

        <section>
          <h2>Camarote</h2>
          <p>
            No camarote temos participantes com as seguintes qualidades:
            amorosa, fofinho, dócil e medroso.
          </p>
          <p> Basta clicar e escolher quem será o campeão na sua casa.</p>
          <button onClick={this.listCamarote}>Dogs Camarote</button>
        </section>
        <section>
          <p>Um amigão mais lindo do que o outro!</p>
          <button onClick={this.clear}>Clear</button>
          <p>
            Para adotar, é preciso ter mais de 18 anos e apresentar documentação
            com foto.
          </p>
          <p>
            Assinar um termo de responsabilidade se compromentendo a cuidar do
            seu novo amigão, pois agora ele será o seu campeão e vale mais que
            1,5 milhão.
          </p>
          <p>
            Os interessados devem entrar em contato com o big fone do canil para
            tentar adotar um dos cachorrinhos.
          </p>
        </section>

        <h3>{this.state.list}</h3>
      </div>
    );
  }
}
