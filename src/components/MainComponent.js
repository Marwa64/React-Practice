import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter(dish => dish.featured === true)[0]} leader={this.state.leaders.filter(leader => leader.featured === true)[0]} promotion={this.state.promotions.filter(promotion => promotion.featured === true)[0]}/>
      );
    }
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}
