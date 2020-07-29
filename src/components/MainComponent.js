import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishID){
    //console.log(dishID);
    this.setState({selectedDish: dishID});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)}/>
          <Dishdetail selectedDish={(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])} />
        </div>
        <Footer />
      </div>
    );
  }
}
