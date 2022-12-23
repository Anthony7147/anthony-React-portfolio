import React, {Component} from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []            
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

         getPortfolioItems(){
            axios.get("https://anthonyknoll.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            // handle success
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
        }

          portfolioItems() {
            return this.state.data.map(item => {
              return (
                <PortfolioItem 
                    key={item.id} 
                    title={item.name} 
                    url={item.url} 
                    slug={item.id} />
              );
            });
          }

    componentDidMount() {
        this.getPortfolioItems();
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