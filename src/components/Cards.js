import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

import bootstrap from "../images/bootstrap.jfif";
import sass from "../images/sass.png";
import react from "../images/react.png";
import js from "../images/js.png";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      proData: [
        { id: 1, image: bootstrap, name: "Bootstrap", cost: "500 $" },
        { id: 2, image: sass, name: "Sass", cost: "600 $" },
        { id: 3, image: js, name: "Js", cost: "800 $" },
        { id: 4, image: react, name: "React", cost: "790 $" },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.proData.map((pro) => (
          <Card
            key={pro.id}
            image={pro.image}
            name={pro.name}
            cost={pro.cost}
            id={pro.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
