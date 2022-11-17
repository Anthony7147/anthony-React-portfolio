import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("portfolio has rendered");
    }

    portfolioItems() {
        const data = ["Quip", "Eventbrite", "SwingAway"];

        return data.map(item => {
            return <PortfolioItem  title={item} />;
        })
    }

    render() {
    return (
        <div>
            <h2>Portfolio Items go here ....</h2>

            {this.portfolioItems()}
        </div>
    );
  }
}