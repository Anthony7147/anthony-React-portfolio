import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                {title: "Quip", Category: "ecommerce", slug: 'quip'}, 
                {title: "Eventbrite", Category: "Sched", slug: 'eventbrite'}, 
                {title: "SwingAway", Category: "ecommerce", slug: 'swingaway'}
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
         }

         handleFilter(filter) {
            this.setState({
                data: this.state.data.filter(item => {
                    return item.Category === filter;
                })
            });
         }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem  title={item.title} url={"google.com"} slug={item.slug} />;
        });
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
    return (
        <div>
            <h2>{this.state.pageTitle}</h2>

            <button onClick={() => this.handleFilter('ecommerce')}>ecommerce</button>
            <button onClick={() => this.handleFilter('Sched')}>Sched</button>
            <button onClick={() => this.handleFilter('ecommerce')}>ecommerce</button>

            {this.portfolioItems()}
        
            
        </div>
    );
  }
}