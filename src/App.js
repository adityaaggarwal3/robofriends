import "./App.css";
import React, { Component } from "react";
import { robots } from "./robots";
import "tachyons";
import CardContainer from "./components/cardContainer/CardContainer";
import SearchBar from "./components/searchBar/SearchBar";
import Scroll from "./components/scroll/Scroll";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchItem: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchItem: event.target.value });
  };

  render() {
    const filteredItems = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchItem.toLowerCase());
    });
    return (
      <div className="App tc">
        <h1 className="header grow shadow-hover">Robo Friends</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <Scroll>
          <CardContainer robots={filteredItems} />
        </Scroll>
      </div>
    );
  }
}

export default App;
