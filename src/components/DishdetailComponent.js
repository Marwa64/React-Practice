import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';

export default class Dishdetail extends Component  {
  renderComments(comments){
    const allComments = comments.map((comment) => {
      return(
        <li key={comment.id} className="mt-3">
          <div>{comment.comment}</div>
          <div> -- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: '2-digit'
                      }).format(new Date(comment.date))}</div>
        </li>
      );
    });
    return(
      <div className="col-12 col-md-5 mt-2">
        <h3>Comments</h3>
        <ul className="list-unstyled">
          {allComments}
        </ul>
      </div>
    );
  }
  renderDish(dish){
    return(
      <div className="col-12 col-md-5 mt-2">
        <Card>
          <CardImg width="100%" key={dish.id} src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render(){
    if (this.props.selectedDish != null){
      return(
        <div className="row">
          {this.renderDish(this.props.selectedDish)}
          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}
