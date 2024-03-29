import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderComments({comments}){
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

  function RenderDish({dish}){
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

  function Dishdetail(props){
    if (props.dish != null){
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

export default Dishdetail;
