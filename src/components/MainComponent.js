import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

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
        <Navbar dark color="primary" >
          <div className="container">
            <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)}/>
          <Dishdetail selectedDish={(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])} />
        </div>
      </div>
    );
  }
}
