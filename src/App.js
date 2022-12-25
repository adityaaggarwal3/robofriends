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
    const { robots, searchItem } = this.state;
    const filteredItems = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
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
