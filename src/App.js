import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул чёрный",
          img: "chair.jpeg",
          desc: "Loren ispum",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "table.jpeg",
          desc: "Loren ispum",
          category: "tables",
          price: "149.99",
        },
        {
          id: 3,
          title: "Телевизор",
          img: "tv.webp",
          desc: "Loren ispum",
          category: "TVs",
          price: "69.99",
        },
        {
          id: 4,
          title: "Стул чёрный",
          img: "chair.jpeg",
          desc: "Loren ispum",
          category: "chairs",
          price: "79.99",
        },
        {
          id: 5,
          title: "Стол",
          img: "table.jpeg",
          desc: "Loren ispum",
          category: "tables",
          price: "149.99",
        },
        {
          id: 6,
          title: "Телевизор",
          img: "tv.webp",
          desc: "Loren ispum",
          category: "TVs",
          price: "69.99",
        },
        {
          id: 7,
          title: "Телевизор",
          img: "tv.webp",
          desc: "Loren ispum",
          category: "TVs",
          price: "69.99",
        },
        {
          id: 8,
          title: "Стул чёрный",
          img: "chair.jpeg",
          desc: "Loren ispum",
          category: "chairs",
          price: "79.99",
        },
        {
          id: 9,
          title: "Стол",
          img: "table.jpeg",
          desc: "Loren ispum",
          category: "tables",
          price: "149.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          showContacts={this.showContacts}
        />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    let value = 1;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
      value = value + 1;
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] }, () =>
        console.log(this.state.orders)
      );
    }
  }
}

export default App;
