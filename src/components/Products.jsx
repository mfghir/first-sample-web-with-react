import axios from "axios";
import { Component } from "react";
import Card from "./Card";
import styles from "./Products.module.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) =>
      this.setState({
        products: res.data,
      })
    );
  }
  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((pro) => (
            <Card
              key={pro.id}
              image={pro.image}
              name={pro.title}
              cost={`${pro.price} $`}
            />
          ))
        ) : (
          <h1>Loading....</h1>
        )}
        {/* {products.map((pro) => (
          <Card
            key={pro.id}
            image={pro.image}
            name={pro.title}
            cost={`${pro.price} $`}
          />
        ))} */}
      </div>
    );
  }
}

export default Products;
